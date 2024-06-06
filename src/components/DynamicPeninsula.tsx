// src/components/DynamicPeninsula.tsx
"use client";

import React from 'react';
import styles from '../styles/DynamicPeninsula.module.css';

const DynamicPeninsula: React.FC = () => (
  <div className={styles.videoContainer}>
    <video className={styles.video} src="/videos/dynamic-peninsula.mp4" autoPlay loop muted />
  </div>
);

export default DynamicPeninsula;
