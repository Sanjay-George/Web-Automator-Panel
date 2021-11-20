import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Link from "next/link";

import styles from "/styles/ModuleCard.module.css";

export default function ModuleCard({ name, description, icon, color }) {
  return (
    <Col className={styles.marginTop20} md="auto">
      <Card className={styles.card} style={{ width: "18rem"}}>
        <Card.Body>
          <Card.Title>
            <i className={`material-icons ${styles.icon}`}>{icon}</i>
            {name}
          </Card.Title>
          <Card.Text className={styles.desc}>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
