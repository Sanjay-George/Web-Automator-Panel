import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import CustomModal from "../../components/common/CustomModal";

export default function WebHookModal({ heading, show, onHide }) {

  return (
    <>
      <CustomModal
        heading="WebHooks"
        show={show}
        onHide={onHide}
      >
        <p>
          There will be support for webhooks here. Once data is scraped, the
          automator will call the webHook and pass on the data.
        </p>
      </CustomModal>
    </>
  );
}

function handleSubmit() {}
