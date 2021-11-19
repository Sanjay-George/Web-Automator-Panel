import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Link from "next/link";

import styles from "../styles/ModuleCard.module.css";

function getStyleByColor(color) {
  switch (color) {
    case "red":
      return "#e53935";
    case "green":
      return "#4db6ac";
    case "yellow":
      return "#ffab00";
    case "blue":
    default:
      return "#03a9f4";
  }
}

export default function ModuleCard({ name, description, icon, color }) {
  return (
    <Col>
      <Card
        style={{
          width: "18rem",
          borderColor: getStyleByColor(color),
          color: getStyleByColor(color),
        }}
      >
        <Card.Body>
          <Card.Title>
            <i className={`material-icons ${styles.icon}`}>{icon}</i>
            {name}
          </Card.Title> 
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
