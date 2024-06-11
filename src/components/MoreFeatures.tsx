import styles from "../styles/MoreFeatures.module.scss";
import BuyButton from "./Button";

interface MoreFeaturesProps {
  title: JSX.Element | string;
  content: JSX.Element | string;
}

const MoreFeatures: React.FC<MoreFeaturesProps> = ({ title, content }) => {
  return (
    <div className={`${styles.section}`}>
      <div className={styles.textWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionContent}>{content}</p>
      </div>
      <br />
      {/* <Button /> */}
    </div>
  );
};

export default MoreFeatures;
