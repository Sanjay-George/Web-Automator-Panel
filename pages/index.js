import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Home/Banner";
import ModuleCard from "../components/Home/ModuleCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "../styles/Home.module.css";

export default function Home() {
  const modules = [
    {
      name: "Web Scraper",
      description: "Scrape data off any website in a beautiful JSON format",
      icon: "data_object",
      color: "red",
    },
    {
      name: "Data Monitoring",
      description: "Monitor prices or other data on your favorite websites",
      icon: "data_thresholding",
      color: "blue",
    },
    {
      name: "Web Vitals",
      description: "Get LCP, FID, and CLS of your website",
      icon: "monitor_heart",
      color: "green",
    },
    {
      name: "UI Testing",
      description: "Configure UI Tests for your website without any code",
      icon: "monitor_heart",
      color: "yellow",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Web Automator</title>
        <meta
          name="description"
          content="Web Automator allows you to automate a variety of tasks on the web."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Glegoo&family=Junge&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Container fluid>
          <Banner />
        </Container>

        <Container fluid="md" style={{ maxWidth: 996 }}>
          <Row style={{ marginTop: "10px" }}>
            <h3>Modules</h3>
            {modules.map((item) => {
              return (
                <ModuleCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                  color={item.color}
                />
              );
            })}
          </Row>
        </Container>

        <Container className={`inverted`} fluid style={{ marginTop: "50px", paddingTop: 30, minHeight: "50vh", backgroundColor: "#1d3557", color: "#f1faee"}}>
          <Container fluid="md" style={{ maxWidth: 996 }}>
            <Row style={{  }}>
              <h3>Contributors</h3>
              {/* use: https://api.github.com/repos/Sanjay-George/Web-Automator/contributors */}
            </Row>
          </Container>
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
