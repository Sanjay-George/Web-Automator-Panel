import Head from "next/head";



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Banner from "/components/Home/Banner";
import Modules from "/components/home/Modules";
import Contributors from "/components/Contributors";

import styles from "../styles/Home.module.css";

export default function Home( {contributors}) {


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
          <Modules />
        </Container>

        <Container className={`inverted`} fluid style={{ marginTop: "50px", paddingTop: 30, minHeight: "50vh", backgroundColor: "#1d3557", color: "#f1faee"}}>
          <Container fluid="md" style={{ maxWidth: 996 }}>
            <Contributors contributors={contributors} />
          </Container>
        </Container>

        
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/repos/Sanjay-George/Web-Automator/contributors`);
  const contributors = await res.json();
  return {
    props: {  contributors }, // will be passed to the page component as props
  };
}
