#!/usr/bin/env python3
"""
Fix broken links in glossary markdown files.
1. Links pointing to non-existent pages -> convert to plain text
2. Links using /glossary/slug format -> fix to /docs/glossary/slug if page exists
3. Links using /docs/glossary/slug -> keep if page exists, else convert to plain text
"""
import os
import re
import sys

DOCS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "docs")

def get_all_valid_slugs():
    """Build set of all valid slugs from frontmatter."""
    slugs = set()
    for root, dirs, files in os.walk(DOCS_DIR):
        for f in files:
            if not f.endswith('.md') or f == 'intro.md':
                continue
            filepath = os.path.join(root, f)
            with open(filepath, 'r') as fh:
                content = fh.read()
            fm_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
            if not fm_match:
                continue
            for line in fm_match.group(1).split('\n'):
                line = line.strip()
                if line.startswith('slug:'):
                    slug = line[len('slug:'):].strip()
                    if slug and slug != '/':
                        slugs.add(slug)
    return slugs

def normalize_link_target(href):
    """
    Extract the slug from a link target.
    /docs/glossary/foo -> /glossary/foo
    /glossary/foo -> /glossary/foo
    """
    if href.startswith('/docs'):
        return href[len('/docs'):]
    return href

def process_file(filepath, valid_slugs, dry_run=False):
    """Process a single file, fixing broken links in Related terms section."""
    with open(filepath, 'r') as fh:
        content = fh.read()
    
    # Find the "Related terms" section
    pattern = r'(## Related terms\s*\n)((?:\s*\n)*(?:- .+\n?)*)'
    match = re.search(pattern, content)
    if not match:
        return False, []
    
    header = match.group(1)
    terms_block = match.group(2)
    
    lines = terms_block.split('\n')
    new_lines = []
    changes = []
    
    for line in lines:
        term_match = re.match(r'^(\s*-\s+)(.*)', line)
        if not term_match:
            new_lines.append(line)
            continue
        
        prefix = term_match.group(1)
        term_content = term_match.group(2).strip()
        
        # Check if this line has a markdown link
        link_match = re.match(r'^\[([^\]]*)\]\(([^)]*)\)\s*(.*)', term_content)
        if not link_match:
            # No link - leave as plain text
            new_lines.append(line)
            continue
        
        link_text = link_match.group(1)
        href = link_match.group(2)
        trailing = link_match.group(3).strip()
        
        # Normalize the href to get the slug
        slug = normalize_link_target(href)
        
        if slug in valid_slugs:
            # Page exists - ensure correct format /docs/glossary/...
            correct_href = f"/docs{slug}"
            if href != correct_href:
                new_line = f"{prefix}[{link_text}]({correct_href})"
                if trailing:
                    new_line += f" {trailing}"
                new_lines.append(new_line)
                changes.append(f"  FIXED PATH: '{link_text}' {href} -> {correct_href}")
            else:
                # Already correct
                new_lines.append(line)
        else:
            # Page does NOT exist - convert to plain text
            new_line = f"{prefix}{link_text}"
            if trailing:
                new_line += f" {trailing}"
            new_lines.append(new_line)
            changes.append(f"  UNLINKED: '{link_text}' (no page at {href})")
    
    new_terms_block = '\n'.join(new_lines)
    new_content = content[:match.start()] + header + new_terms_block + content[match.end():]
    
    if new_content != content:
        if not dry_run:
            with open(filepath, 'w') as fh:
                fh.write(new_content)
        return True, changes
    
    return False, changes

def main():
    dry_run = '--dry-run' in sys.argv
    
    if dry_run:
        print("=== DRY RUN MODE ===\n")
    
    print("Building valid slugs set...")
    valid_slugs = get_all_valid_slugs()
    print(f"Found {len(valid_slugs)} valid slugs.\n")
    
    total_files = 0
    modified_files = 0
    total_fixed = 0
    total_unlinked = 0
    
    for root, dirs, files in sorted(os.walk(DOCS_DIR)):
        dirs.sort()
        for f in sorted(files):
            if not f.endswith('.md') or f == 'intro.md':
                continue
            filepath = os.path.join(root, f)
            total_files += 1
            
            modified, changes = process_file(filepath, valid_slugs, dry_run)
            
            if changes:
                rel_path = os.path.relpath(filepath, DOCS_DIR)
                modified_files += 1
                print(f"{'[DRY] ' if dry_run else ''}Modified: {rel_path}")
                for c in changes:
                    print(c)
                    if 'FIXED PATH' in c:
                        total_fixed += 1
                    elif 'UNLINKED' in c:
                        total_unlinked += 1
    
    print(f"\n{'='*60}")
    print(f"Total files scanned: {total_files}")
    print(f"Files modified: {modified_files}")
    print(f"Links with path fixed: {total_fixed}")
    print(f"Links removed (no page): {total_unlinked}")

if __name__ == '__main__':
    main()
