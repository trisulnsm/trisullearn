import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Trisul Learn"
      description="Networking terms explained clearly"
    >
      <main className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Trisul Learn</h1>

          <p className={styles.subtitle}>
            Explore networking, NetFlow, security, observability, and infrastructure terms in simple practical language.
          </p>

          <input
            type="text"
            placeholder="Search Glossary Terms..."
            className={styles.searchBox}
            onFocus={() => {
              const searchButton = document.querySelector('.DocSearch-Button');
              if (searchButton) searchButton.click();
            }}
            readOnly
          />
        </div>
      </main>
    </Layout>
  );
}
