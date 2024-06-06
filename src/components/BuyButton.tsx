// src/components/BuyButton.tsx
import React from 'react';
import styles from '../styles/BuyButton.module.css';

const BuyButton: React.FC = () => {
  return (
    <a href="https://your-purchase-link.com" className={styles.buyButton}>
      Buy
    </a>
  );
};

export default BuyButton;
