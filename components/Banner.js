import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <>
      <Row className={styles.background}>
        <div className={styles.lightBar}></div>
        <div className={styles.darkBar}></div>
      </Row>
      <Row className={styles.titleRow}>
        <h1 className={styles.title}>Web Automator.</h1>
      </Row>
    </>
  );
}
