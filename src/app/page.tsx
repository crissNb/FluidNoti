"use client";

import React, { useEffect } from 'react';
import DynamicPeninsula from '../components/DynamicPeninsula';
import BuyButton from '../components/BuyButton';
import LearnMoreButton from '../components/LearnMoreButton';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        const delta = Math.sign(e.deltaY);
        const sections = document.querySelectorAll(`.${styles.sectionWrapper}`);
        let currentSection = 0;
        sections.forEach((section, index) => {
          if (window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.clientHeight) {
            currentSection = index;
          }
        });
        const nextSection = Math.min(
          sections.length - 1,
          Math.max(0, currentSection + delta)
        );
        sections[nextSection].scrollIntoView({ behavior: 'smooth' });
      }, 150);
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionWrapper}>
        <div className={styles.background}></div>
        <div className={styles.centerWrapper}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Fluid</span>Noti
          </h1>
          <div className={styles.separator}></div>
          <p className={styles.description}>A dynamic island experience for your MacBook</p>
          <div className={styles.buttonGroup}>
            <BuyButton />
            <LearnMoreButton />
          </div>
        </div>
        <DynamicPeninsula />
      </div>

      <div className={styles.sectionWrapper}>
        <Section 
          title="Enhanced Productivity" 
          content="Stay updated with real-time information right around your MacBook's notch. FluidNoti ensures you never miss important notifications and reminders."
        />
      </div>

      <div className={styles.sectionWrapper}>
        <Section 
          title="Seamless Integration" 
          content="FluidNoti integrates seamlessly with macOS, providing instant access to notifications, reminders, and more, enhancing your workflow without interruptions."
        />
      </div>

      <div className={styles.sectionWrapper}>
        <Section 
          title="Customizable Experience" 
          content="Tailor FluidNoti to your preferences with customizable settings, ensuring a personalized notification experience that fits your unique workflow."
        />
      </div>
    </div>
  );
};

export default Home;
