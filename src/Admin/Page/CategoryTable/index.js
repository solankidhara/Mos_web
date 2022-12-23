import axios from "axios";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { Alert, Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserInput from "../../../Components/common/UserInput/UserInput";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";
import { catagoryTableData, catagoryTableFields } from "../../Constance/catagoryTableData";

const schema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

const CatagoryTable = () => {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (userDetails) => {
    try {
      const { data } = await axios.post("/admin/category", userDetails);
      if (data) {
        setShow(false);
      }
    } catch (e) {
      console.log(e);
      setErr({ message: e.response.data.message });
    }
  };

  return (
    <>
      <Row className="justify-content-between mb-3">
        <Col md={8}>
          <h4>List View of Category / Tag / Type_of_Content</h4>
        </Col>
        <Col className="text-end" md={4}>
          <FilledBtn text="Add Data" onClick={handleShow} />
        </Col>
      </Row>
      <CustomTable fields={catagoryTableFields} data={catagoryTableData} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  {err?.message && (
                    <Alert variant="danger" className="p-2 my-2">
                      {" "}
                      {err.message}
                    </Alert>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Content Name</Form.Label>
                </Col>
                <Col>
                  <UserInput type="text" name="name" control={control} />
                </Col>
                <Col xs={12}>
                  {errors?.name && (
                    <Alert variant="danger" className="p-2 my-2">
                      {" "}
                      {errors.name?.message}
                    </Alert>
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col>
                  <UserInput type="text" name="description" control={control} />
                </Col>
                <Col xs={12}>
                  {errors?.description && (
                    <Alert variant="danger" className="p-2 my-2">
                      {" "}
                      {errors.description?.message}
                    </Alert>
                  )}
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <FilledBtn text={"Save"} onClick={handleSubmit(onSubmit)} />
          <FilledBtn text={"Cancel"} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CatagoryTable;
