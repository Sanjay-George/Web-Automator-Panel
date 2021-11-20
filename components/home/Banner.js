import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import styles from "../../styles/Banner.module.css";

export default function Banner() {
  return (
    <>
      <Row className={styles.background}>
        <div className={styles.lightBar}></div>
        <div className={styles.darkBar}></div>
      </Row>
      <Row className={styles.titleRow}>
        <h1 className={styles.title}>Web Automator</h1>
        <p className={styles.subTitle}>
          {`The most powerful and versatile automator on the web. And it's easy to use!`}
        </p>
      </Row>
      <div>
        {/* <span className={`material-icons ${styles.phone}`}>phone_iphone</span> */}
        <span className={`material-icons ${styles.computer}`}>computer</span>
        <span className={`material-icons ${styles.web1}`}>public</span>
        <span className={`material-icons ${styles.web2}`}>settings_ethernet</span>
        <span className={`material-icons ${styles.web3}`}>cloud_download</span>
      </div>
    </>
  );
}
