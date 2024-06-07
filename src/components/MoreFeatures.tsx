import styles from '../styles/MoreFeatures.module.css';

interface MoreFeaturesProps {
  title: string;
  content: JSX.Element | string;
}

const MoreFeatures: React.FC<MoreFeaturesProps> = ({ title, content }) => {
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

