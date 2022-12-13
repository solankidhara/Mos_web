import { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import CustomDatepicker from "../../Components/CustomDatepicker";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";
import { listOfContetData, listOfContetField } from "../../Constance/listOfContentData";

const ListOfContent = () => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (
            <>
                  <Row className="mb-5">
                        <Col>
                              <h4>List View Of Content</h4>
                        </Col>
                        <Col className="text-end">
                              <div className="d-inline-block me-3">
                                    <Form.Select style={{ height: '40px' }}>
                                          <option>Select Category</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                    </Form.Select>
                              </div>
                              <CustomDatepicker className={'me-3'} />
                              <FilledBtn text='Add Data' onClick={handleShow} />
                        </Col>
                  </Row>
                  <CustomTable fields={listOfContetField} data={listOfContetData} />
                  <Modal show={show} onHide={handleClose} size='lg'>
                        <Modal.Header closeButton>
                              <Modal.Title>Insert Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>
                                                      <Form.Label>No</Form.Label>
                                                </Col>
                                                <Col md={5}>
                                                      <Form.Control type="text" placeholder='Enter Text' />
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row> 
                                                <Col md={3}>                                                
                                                      <Form.Label>Type of Content</Form.Label>
                                                </Col>
                                                <Col md={5}>
                                                      <Form.Control type="text" placeholder='Enter Text'/>                                                
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Category</Form.Label>
                                                </Col>
                                                <Col md={5}>                              
                                                      <Form.Select aria-label="Default select example">
                                                            <option>Select Category</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                      </Form.Select>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Tag</Form.Label>
                                                </Col>
                                                <Col md={5}>                              
                                                      <Form.Select aria-label="Default select example">
                                                            <option>Select Tag</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                      </Form.Select>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Tag_2</Form.Label>
                                                </Col>
                                                <Col md={5}>                              
                                                      <Form.Select aria-label="Default select example">
                                                            <option>Tag_2</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                      </Form.Select>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Name</Form.Label>
                                                </Col>
                                                <Col md={5}>                                                
                                                      <Form.Control type="text" placeholder='Content Name'/>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Name</Form.Label>
                                                </Col>
                                                <Col md={5}>                                                
                                                      <Form.Control as="textarea" rows={3} placeholder='Content Name'/>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Id</Form.Label>
                                                </Col>
                                                <Col md={5}>                                                
                                                      <Form.Control type="text" placeholder='Content Name'/>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col md={3}>                                                
                                                      <Form.Label>Upload</Form.Label>
                                                </Col>
                                                <Col md={5}>                                                
                                                      <Form.Control type="file" placeholder='Main File' className="mb-3" />
                                                      <Form.Control type="file" placeholder='Watermark File' className="mb-3" />
                                                      <Form.Control type="file" placeholder='Thumbnail' className="mb-3" />
                                                </Col>
                                                <Col md={4}>
                                                      
                                                </Col>
                                          </Row>
                                    </Form.Group>
                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <FilledBtn text={'Save'} onClick={handleClose} />
                              <FilledBtn text={'Cancel'} onClick={handleClose} />
                        </Modal.Footer>
                  </Modal>
            </>
      )
}

export default ListOfContent;