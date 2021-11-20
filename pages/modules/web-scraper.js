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


export default function Index( {contributors}) {
  return (
    <Layout>
        <NavBar />
        <SideBar activeIndex={0} />

        <Container fluid>
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
