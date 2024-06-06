// src/components/LearnMoreButton.tsx
"use client";

import React from 'react';
import styles from '../styles/LearnMoreButton.module.css';

const LearnMoreButton: React.FC = () => {
  const handleClick = () => {
    const sections = document.querySelectorAll(`.${styles.sectionWrapper}`);
    sections[1]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={styles.learnMoreButton} onClick={handleClick}>
      Learn More
    </button>
  );
};

export default LearnMoreButton;
