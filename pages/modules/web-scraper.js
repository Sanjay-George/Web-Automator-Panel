import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Banner from "../../components/home/Banner";
import Modules from "../../components/home/Modules";
import Contributors from "../../components/home/Contributors";
import Layout from "../../components/layout";
import NavBar from "../../components/common/Navbar";
import SideBar from "../../components/common/Sidebar";
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';

import styles from "../../styles/WebScraper.module.css";

export default function Index({ contributors }) {
  return (
    <Layout>
      <NavBar />
      <SideBar activeIndex={0} />

      <Container className={styles.table}>
        <Row className={styles.heading}>
          <Col>Name</Col>
          <Col md={4}>Url</Col>
          <Col>Actions</Col>
          <Col>Status</Col>
          <Col md={1}>Delete</Col>
        </Row>

        <Row className={styles.dataRow}>
          <Col>Bikewale</Col>
          <Col md={4}>www.bikewale.com</Col>
          <Col className={styles.actions}>
            <i class="material-icons black-text">play_arrow</i>
            <i class="material-icons black-text">settings</i>
            <i class="material-icons black-text">webhook</i>
            <i class="material-icons black-text">download</i>
          </Col>
          <Col className={styles.actions}>
            <Badge bg="warning" className={styles.badge}>
              In Progress
            </Badge>
          </Col>
          <Col md={1} className={styles.actions}>
            <i class="material-icons black-text">delete</i>
          </Col>
        </Row>

        <Row className={styles.dataRow}>
          <Col>Carwale - Honda Cars</Col>
          <Col md={4}>www.carwale.com/honda-cars/</Col>
          <Col className={styles.actions}>
            <i class="material-icons black-text">play_arrow</i>
            <i class="material-icons black-text">settings</i>
            <i class="material-icons black-text">webhook</i>
            <i class="material-icons black-text">download</i>
          </Col>
          <Col className={styles.actions}>
            <Badge bg="success" className={styles.badge}>
              Data scraped
            </Badge>
          </Col>
          <Col md={1} className={styles.actions}>
            <i class="material-icons black-text">delete</i>
          </Col>
        </Row>

        <Row>
          <Col className={styles.addBtn}>
            <Button variant="outline-primary">Add</Button>{" "}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(`https://api.github.com/repos/Sanjay-George/Web-Automator/contributors`);
//   const contributors = await res.json();
//   return {
//     props: {  contributors }, // will be passed to the page component as props
//   };
// }
