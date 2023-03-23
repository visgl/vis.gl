// pages/404.tsx
import React from 'react';
import Link from 'next/link';
import styles from './404.module.css';

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Link href="/">
        <a className={styles.homeLink}>Go to Home</a>
      </Link>
    </div>
  );
};

export default Custom404;
