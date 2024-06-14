import React, { useEffect, useState } from "react";
import styles from "../styles/TopNav.module.scss";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { debounce } from "@/app/helper";

interface TopNavProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const TopNav: React.FC<TopNavProps> = ({ containerRef }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop > 100;
        setShow(scrollPosition);
      }
    }, 150);

    window.addEventListener("scroll", handleScroll, { capture: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.topNav}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.title}>
            <span>
              <span className={styles.highlight}>Fluid</span>Noti
            </span>
          </div>
          <div className={styles.buttons}>
            <Button
              text="Buy Now"
              icon="ri-shopping-cart-2-line"
              href="https://crissnb.gumroad.com/l/fluidnoti"
              purchaseButton={true}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopNav;
