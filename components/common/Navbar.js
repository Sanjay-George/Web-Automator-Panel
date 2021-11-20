import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";


const brandName = "Web Automator";


export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>
                <img
                  alt="brand icon"
                  src="/wa-icon.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{` ${brandName}`}
              </Navbar.Brand>
            </a>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
