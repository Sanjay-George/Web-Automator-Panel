import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";

import CustomModal from "../../components/common/CustomModal";

export default function ConfigModal({ heading, show, onHide }) {
  const router = useRouter();

  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);

  const validate = ({ name, url }) => {
    return name.length > 0 && url.length > 0;
  };

  const setFormData = ({ name, url }) => {
    setData({
      name,
      url,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const formData = { name: form.name.value, url: form.url.value };
   
    setFormData(formData);
    const isValid = validate(formData); // TODO: Improve validation logic

    if (!isValid) {
      // setValidated(false);
      return;
    }

    // setValidated(true);

    // TODO: Add Crawler 
    await addCrawler(formData);
    onHide();
    router.reload();
  };

  return (
    <>
      <CustomModal heading={heading} show={show} onHide={onHide}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              className="position-relative"
              as={Col}
              md="5"
              controlId="name"
              required
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="A meaningful name for the crawler"
              />
            </Form.Group>

            <Form.Group
              className="position-relative"
              as={Col}
              md="7"
              controlId="url"
              required
            >
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="The base URL of the website to be crawled"
              />
            </Form.Group>
          </Row>

          <Row>
            <Col>
              <Button variant="primary" type="submit">
                {`Let's go!`}
              </Button>
            </Col>
          </Row>
        </Form>
      </CustomModal>
    </>
  );
}


async function addCrawler(data) {
  try {
    await fetch(`http://localhost:5000/api/crawlers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  } catch (ex) {
    console.error(ex);
  }
}