import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModuleCard from "/components/Home/ModuleCard";


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


export default function Modules() {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <h3>Modules</h3>
        {modules.map((item, index) => {
          return (
            <ModuleCard
              key={index}
              name={item.name}
              description={item.description}
              icon={item.icon}
              color={item.color}
            />
          );
        })}
      </Row>
    </>
  );
}
