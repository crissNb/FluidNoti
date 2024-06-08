import styles from '../styles/Section.module.css';

interface SectionProps {
  title: JSX.Element | string;
  content: JSX.Element | string;
  videoUrl: string | JSX.Element;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, content, videoUrl, reverse }) => {
  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageWrapper}>
        {typeof videoUrl === 'string' ? (
          <img src={videoUrl} alt={typeof title === 'string' ? title : 'Section Image'} className={styles.image} />
        ) : (
          videoUrl
        )}
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionContent}>{content}</p>
      </div>
    </div>
  );
};

export default Section;
