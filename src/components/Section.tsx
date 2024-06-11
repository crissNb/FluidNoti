import styles from "../styles/Section.module.scss";
import Image from "next/image";

interface SectionModuleProps {
  title: JSX.Element | string;
  content: JSX.Element | string;
  videoUrl: string | JSX.Element;
  reverse?: boolean;
}

const SectionModule: React.FC<SectionModuleProps> = ({
  title,
  content: description,
  videoUrl,
  reverse,
}) => {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.imageWrapper}>
          {typeof videoUrl === "string" ? (
            <Image
              src={videoUrl}
              alt={typeof title === "string" ? title : "Section Image"}
              className={styles.image}
              width={500}
              height={500}
            />
          ) : (
            videoUrl
          )}
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionContent}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionModule;
