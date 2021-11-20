import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Banner from "../components/home/Banner";
import Modules from "../components/home/Modules";
import Contributors from "../components/home/Contributors";
import Layout from "../components/layout";


export default function Home( {contributors}) {
  return (
    <Layout isHomePage>
        <Container fluid>
          <Banner />
        </Container>

        <Container fluid="md" style={{ maxWidth: 996 }}>
          <Modules />
        </Container>

        <Container className={`inverted`} fluid style={{ marginTop: "50px", padding: 30, color: "#f1faee"}}>
          <Container fluid="md" style={{ maxWidth: 996 }}>
            <Contributors contributors={contributors} />
          </Container>
        </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/repos/Sanjay-George/Web-Automator/contributors`);
  const contributors = await res.json();
  return {
    props: {  contributors }, // will be passed to the page component as props
  };
}
