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
import Button from "react-bootstrap/Button";
import CustomModal from "../../components/common/CustomModal";
import { useState } from "react";

import styles from "../../styles/WebScraper.module.css";
import DataRow from "../../components/web-scraper/DataRow";

export default function Index({ crawlers }) {
  const [showModal, setShowModal] = useState(false);
  const [showWebHookModal, setShowWebHookModal] = useState(false);

  return (
    <Layout>
      <NavBar />
      <SideBar activeIndex={0} />

      <CustomModal
        heading="Add Crawler"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <p>This will be a form to add crawler.</p>
      </CustomModal>

      <CustomModal
        heading="WebHooks"
        show={showWebHookModal}
        onHide={() => setShowWebHookModal(false)}
      >
        <p>
          There will be support for webhooks here. Once data is scraped, the
          automator will call the webHook and pass on the data.
        </p>
      </CustomModal>

      <Container className={styles.table}>
        <Row className={styles.heading}>
          <Col md={2}>Name</Col>
          <Col md={4}>Url</Col>
          <Col md={3}>Actions</Col>
          <Col md={1}>Status</Col>
          <Col md={1}>LastRun</Col>
          <Col md={1}>Delete</Col>
        </Row>

        {crawlers.map((crawler) => {
          return (
            <DataRow crawler={crawler} setShowWebHookModal={setShowWebHookModal}/>
          );
        })}

        <Row>
          <Col className={styles.addBtn}>
            <Button
              variant="outline-primary"
              onClick={() => setShowModal(true)}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/crawlers/`);
  const crawlers = await res.json();
  return {
    props: { crawlers },
  };
}


