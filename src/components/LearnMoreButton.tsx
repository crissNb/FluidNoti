// src/components/LearnMoreButton.tsx
"use client";

import React from 'react';
import styles from '../styles/LearnMoreButton.module.css';
import homeStyles from '../styles/Home.module.css';

const LearnMoreButton: React.FC = () => {
  const handleClick = () => {
    const sections = document.querySelectorAll(`.${homeStyles.sectionWrapper}`);
    (sections[1] as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={styles.learnMoreButton} onClick={handleClick}>
      Learn More
    </button>
  );
};

export default LearnMoreButton;
