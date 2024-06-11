import React, { PureComponent } from "react";
import styles from "../styles/TopNav.module.scss";
import "remixicon/fonts/remixicon.css";
import Button from "./Button";
import { motion } from "framer-motion";

const TopNav: React.FC = () => {
  return (
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
  );
};

export default TopNav;
