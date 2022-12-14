import { useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import CustomTable from '../../Components/CustomTable';
import FilledBtn from '../../Components/FilledBtn';
import { catagoryTableData, catagoryTableFields } from '../../Constance/catagoryTableData';

const CatagoryTable = () => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (
            <>
                  <Row className="justify-content-between mb-3">
                        <Col md={8}>
                              <h4>List View of Category / Tag / Type_of_Content</h4>
                        </Col>
                        <Col className="text-end" md={4}>
                              <FilledBtn text='Add Data' onClick={handleShow} />
                        </Col>
                  </Row>
                  <CustomTable fields={catagoryTableFields} data={catagoryTableData} />
                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Insert Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col>
                                                      <Form.Label>No</Form.Label>
                                                </Col>
                                                <Col>
                                                      <Form.Control type="text" placeholder='Enter Text' />
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row> 
                                                <Col>                                                
                                                      <Form.Label>Type of Content</Form.Label>
                                                </Col>
                                                <Col>
                                                      <Form.Control type="text" placeholder='Enter Text'/>                                                
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col>                                                
                                                      <Form.Label>Added Date</Form.Label>
                                                </Col>
                                                <Col>                              
                                                      <Form.Control type="date" placeholder='Date'/>
                                                </Col>
                                          </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                          <Row>
                                                <Col>                                                
                                                      <Form.Label>No of Content</Form.Label>
                                                </Col>
                                                <Col>                                                
                                                      <Form.Control type="text" placeholder='Enter Text'/>
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
      );
};

export default CatagoryTable;
