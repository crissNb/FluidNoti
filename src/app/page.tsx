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
                    if (window.scrollY >= (section as HTMLElement).offsetTop && window.scrollY < (section as HTMLElement).offsetTop + (section as HTMLElement).clientHeight) {
                        currentSection = index;
                    }
                });
                const nextSection = Math.min(
                    sections.length - 1,
                    Math.max(0, currentSection + delta)
                );
                (sections[nextSection] as HTMLElement).scrollIntoView({ behavior: 'smooth' });
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
          title="Now Playing" 
        content="FluidNoti supports Spotify, Apple Music, and other music players, displaying the current song and artist in a beautiful notification."
        />
      </div>

      <div className={styles.sectionWrapper}>
        <Section 
          title="Settings" 
        content="FluidNoti allows you to customize the appearance of the notch, making it suitable for all kinds of MacBooks"
        />
      </div>

      <div className={styles.sectionWrapper}>
        <Section 
          title="and... more features to come" 
          content="The app will be continuously updated with new features and bug fixes."
        />
      </div>
    </div>
  );
};

export default Home;
