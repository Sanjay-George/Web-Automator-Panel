import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";

import styles from "../../styles/Contributors.module.css";

export default function Contributors({ contributors }) {
  if(!contributors || !contributors.length) return null;
  return (
    <Row style={{}}>
      <h3>Contributors</h3>
      {/* use: https://api.github.com/repos/Sanjay-George/Web-Automator/contributors */}

      {contributors.map((item) => {
        return (
          <Col key={item.id} md="auto">
            <a href={item.html_url} target="_blank" rel="noreferrer">
              <Card style={{ width: "150px" }} className={styles.card}>
                <Card.Body>
                  <div className={styles.avatar}>
                    <Image src={item.avatar_url} width={50} height={50} alt="Avatar Url"/>
                  </div>

                  <div className={styles.name}>{item.login}</div>
                  <div className={styles.commitCount}>
                    {item.contributions} commits
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        );
      })}
    </Row>
  );
}
