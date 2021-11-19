import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import ModuleCard from "../components/ModuleCard";

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
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Container fluid>
          <Banner />
        </Container>

        <Container fluid="md" style={{maxWidth: 996}}>
          <Row style={{marginTop: "50px"}}>
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
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
