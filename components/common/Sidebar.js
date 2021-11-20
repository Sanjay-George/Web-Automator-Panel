import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { modules } from "../home/Modules";

import styles from "../../styles/Sidebar.module.css";

const brandName = "Web Automator";

export default function SideBar( { activeIndex }) {
  return (
    <>
      <ul className={styles.ul}>
        <Link href="/">
          <a>
            <li><i className={`material-icons ${styles.icon}`}>home</i> Home</li>
          </a>
        </Link>

        {modules.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <Link href="/" key={index}>
              <a>
                <li className={`${isActive ? styles.active : ''}`}><i className={`material-icons ${styles.icon}`}>{item.icon}</i> {item.name}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
