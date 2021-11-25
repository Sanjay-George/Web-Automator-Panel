import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import styles from "../../styles/WebScraper.module.css";

export default function DataRow({ crawler, setShowWebHookModal }) {
  return (
    <>
      <Row className={styles.dataRow} key={crawler.id}>
        <Col md={2}>{crawler.name}</Col>
        <Col md={4}>
          <a href={crawler.url} target="_blank" rel="noreferrer">
            {crawler.url}
          </a>
        </Col>
        <Col md={3} className={styles.actions}>
          <i className={"material-icons black-text"}>edit</i>
          <i
            className={"material-icons black-text"}
            onClick={() => configureCrawler(crawler.id)}
          >
            settings
          </i>
          <i
            className={"material-icons black-text"}
            onClick={() => runCrawler(crawler.id)}
          >
            play_arrow
          </i>
          <i className={"material-icons black-text"}>search</i>
          <i
            className={"material-icons black-text"}
            onClick={() => setShowWebHookModal(true)}
          >
            webhook
          </i>{" "}
          <i className={"material-icons black-text"}>download</i>
        </Col>
        <Col md={1} className={styles.actions}>
          <Badge
            bg={getBadgeBackground(crawler.statusId)}
            className={styles.badge}
          >
            {crawler.status}
          </Badge>
        </Col>
        <Col md={1} className={styles.lastRun}>
          {new Date(crawler.lastRun).toLocaleString()}
        </Col>
        <Col md={1} className={styles.actions}>
          <i className={"material-icons black-text"}>delete</i>
        </Col>
      </Row>
      ;
    </>
  );
}

const crawlerStatus = {
  NOT_CONFIGURED: 1,
  CONFIGURED: 2,
  IN_PROGRESS: 3,
  COMPLETED: 4,
  FAILED: 5,
};

async function configureCrawler(id) {
  try {
    await fetch(`http://localhost:5000/api/crawlers/configure/${id}`, {
      method: "POST",
    });
  } catch (ex) {
    console.error(ex);
  }
}

async function runCrawler(id) {
  try {
    await fetch(`http://localhost:5000/api/crawlers/run/${id}`, {
      method: "POST",
    });
  } catch (ex) {
    console.error(ex);
  }
}

function getBadgeBackground(status) {
  switch (status) {
    case crawlerStatus.NOT_CONFIGURED:
      return "secondary";
    case crawlerStatus.CONFIGURED:
      return "primary";
    case crawlerStatus.IN_PROGRESS:
      return "warning";
    case crawlerStatus.COMPLETED:
      return "success";
    case crawlerStatus.FAILED:
      return "danger";
    default:
      return "secondary";
  }
}
