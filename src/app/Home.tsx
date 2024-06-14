"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import SectionModule from "../components/Section";
import MoreFeatures from "../components/MoreFeatures";
import styles from "../styles/Home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import { debounce } from "./helper";

export const Home: React.FC = () => {
  const learnMoreRef = useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [showPeninsula, setShowPeninsula] = useState(false);
  const handleClick = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (e: WheelEvent) => {
      debounce(() => {
        const delta = Math.sign(e.deltaY);

        if (container === null) return;

        (container as HTMLElement).scrollBy({
          top: delta,
          behavior: "smooth",
        });
      }, 150);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <TopNav containerRef={containerRef} />

      <div ref={containerRef} className={styles.container}>
        <section id="section" className={styles.sectionWrapper}>
          <AnimatePresence>
            <motion.div
              className={styles.centerWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.3,
              }}
              onAnimationComplete={() => setShowPeninsula(true)}
            >
              <h1 className={styles.title}>
                <span className={styles.highlight}>Fluid</span>Noti
              </h1>
              <hr />
              <p className={styles.description}>
                Dynamic island experience for your MacBook
              </p>
              <motion.div
                className={styles.buttonGroup}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { staggerChildren: 1.5, delay: 2 },
                }}
              >
                <Button
                  text="Buy on Gumroad"
                  icon="ri-shopping-cart-2-line"
                  href="https://crissnb.gumroad.com/l/fluidnoti"
                  purchaseButton={true}
                />
                <Button
                  text="Learn More"
                  icon="ri-arrow-down-s-line"
                  onClick={handleClick}
                  purchaseButton={false}
                />
              </motion.div>
            </motion.div>
            {showPeninsula && (
              <motion.div
                className={styles.dynamicPeninsula}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100%" }}
                transition={{
                  height: {
                    ease: [0.17, 0.55, 0.55, 1],
                    duration: 2.5,
                  },
                  opacity: { duration: 0.4 },
                }}
              >
                <video
                  className={styles.video}
                  src="/videos/dynamic-peninsula.webm"
                  autoPlay
                  loop
                  muted
                  controls={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section
          id="section"
          ref={learnMoreRef}
          className={styles.sectionWrapper}
        >
          <SectionModule
            title={
              <span>
                <i className="ri-music-2-line"></i> Now Playing
              </span>
            }
            content={
              <span>
                <span className={styles.bold}>FluidNoti</span> supports Spotify,
                Apple Music, and other music players, displaying the current
                song and artist in a beautiful notification.
              </span>
            }
            media="/nowplaying.png"
          />
        </section>

        <section id="section" className={styles.sectionWrapper}>
          <SectionModule
            title={
              <span>
                <i className="ri-settings-4-line"></i> Settings
              </span>
            }
            content={
              <span>
                <span className={styles.bold}>FluidNoti</span> allows you to
                customize the appearance of the notch, making it suitable for
                all kinds of MacBooks
              </span>
            }
            media="/settings.png"
            reverse
          />
        </section>

        <section id="section" className={styles.sectionWrapper}>
          <MoreFeatures
            title={
              <span>
                <i className="ri-bard-fill"></i> and... more features to come
              </span>
            }
            content={
              <span>
                Stay tuned for{" "}
                <span className={styles.bold}>upcoming features</span> that will
                enhance your experience.
              </span>
            }
          />
        </section>
      </div>
    </>
  );
};
