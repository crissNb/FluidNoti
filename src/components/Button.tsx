// src/components/Button.tsx
import React from "react";
import styles from "../styles/Button.module.scss";
import "remixicon/fonts/remixicon.css";

interface ButtonProps {
  text: string;
  ariaLabel?: string;
  href?: string;
  icon?: string;
  purchaseButton?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  ariaLabel,
  href,
  icon,
  purchaseButton = false,
  onClick,
}) => {
  return (
    <a
      href={href}
      title={text}
      className={`${styles.button} ${purchaseButton && styles.buyButton}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <i className={icon}></i> {text}
    </a>
  );
};

export default Button;
