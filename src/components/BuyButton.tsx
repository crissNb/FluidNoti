// src/components/BuyButton.tsx
import React from 'react';
import styles from '../styles/BuyButton.module.css';
import 'remixicon/fonts/remixicon.css'

const BuyButton: React.FC = () => {
  return (
    <a href="https://crissnb.gumroad.com/l/fluidnoti" className={styles.buyButton}>
      < i className="ri-shopping-cart-2-line"></i> Buy
    </a>
  );
};

export default BuyButton;
