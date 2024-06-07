import styles from '../styles/MoreFeatures.module.css';

interface MoreFeaturesProps {
  title: string;
  content: string;
}

const MoreFeatures: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className={`${styles.section}`}>
      <div className={styles.textWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionContent}>{content}</p>
      </div>
    </div>
  );
};

export default MoreFeatures;

