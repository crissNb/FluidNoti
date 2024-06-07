import styles from '../styles/Section.module.css';

interface SectionProps {
  title: string;
  content: string;
  videoUrl: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, content, videoUrl, reverse }) => {
  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.imageWrapper}>
    <img src={videoUrl} alt={title} className={styles.image} />
    </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionContent}>{content}</p>
      </div>
    </div>
  );
};

export default Section;
