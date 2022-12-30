import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import Dropdown from "../../../Components/common/Dropdown";
import UserInput from "../../../Components/common/UserInput/UserInput";

const ContentFormUpdate = ({ rowData, control }) => {

  const categories = useSelector(state => state.categories)
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Type of Content</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="contentType" options={categories.contentType} defaultValue={true} defaultIndex={categories.contentType.findIndex(x => x.label === rowData.contentType)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Category</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="category" options={categories.category} defaultValue={true} defaultIndex={categories.category.findIndex(x => x.label === rowData.categoryName)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Tag</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="tagOne" options={categories.tags} defaultValue={true} defaultIndex={categories.tags.findIndex(x => x.value === rowData.tag_one_id)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Tag 2</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="tagTwo" options={categories.tags} defaultValue={true} defaultIndex={categories.tags.findIndex(x => x.value === rowData.tag_one_id)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Content Name</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name="name" control={control} defaultValue={rowData.name} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Description</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name="description" control={control} defaultValue={rowData.description} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col xs={6} lg={4}>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Main File</Form.Label>
                <img src={rowData.mainFile} width="150px" height="150px" />
              </div>
            </Col>
            <Col xs={6} lg={4}>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Thumbnail Image</Form.Label>
                <img src={rowData.thumbFile} width="150px" height="150px" />
              </div>
            </Col>
            <Col xs={6} lg={4}>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Thumbnail Image</Form.Label>
                <img src={rowData.waterMarkFile} width="150px" height="150px" />
              </div>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default ContentFormUpdate;
