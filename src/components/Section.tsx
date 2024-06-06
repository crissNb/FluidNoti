// src/components/Section.tsx
"use client";

import React from 'react';
import styles from '../styles/Home.module.css';

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div className={styles.info}>
    <h2 className={`${styles.title} ${styles.bold}`}>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Section;
