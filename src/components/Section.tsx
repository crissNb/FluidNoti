import { useRef } from "react";
import styles from "../styles/Section.module.scss";
import Image from "next/image";
import { useInView } from "framer-motion";

interface SectionModuleProps {
  title: JSX.Element | string;
  content: JSX.Element | string;
  media: string | JSX.Element;
  reverse?: boolean;
}

const SectionModule: React.FC<SectionModuleProps> = ({
  title,
  content: description,
  media,
  reverse,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`${styles.section} ${reverse ? styles.reverse : ""}`}
      ref={ref}
    >
      <div className={styles.sectionWrapper}>
        <div
          className={styles.imageWrapper}
          style={{
            transform: isInView
              ? "none"
              : `translateX(${reverse ? "55px" : "-55px"})`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {typeof media === "string" ? (
            <Image
              src={media}
              alt={typeof title === "string" ? title : "Section Image"}
              className={styles.image}
              width={500}
              height={500}
            />
          ) : (
            media
          )}
        </div>
        <div className={styles.textWrapper}>
          <h2
            className={styles.sectionTitle}
            style={{
              transform: isInView ? "none" : "translateY(-20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {title}
          </h2>
          <p
            className={styles.sectionContent}
            style={{
              transform: isInView ? "none" : "translateY(-20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "1s",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionModule;
