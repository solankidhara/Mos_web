import { Col, Row } from 'react-bootstrap';
import classes from './similarcontent.module.css'


const SimilarContent = (props) => {
      return (
            <Row className=" justify-content-center g-4" >
                  {props.content.map((img, index) => (
                        <Col key={index} lg={2} md={3} sm={4} xs={6}>
                              <div className={classes.similarImg}>
                                    <img
                                          alt="related content"
                                          src={img.path}
                                    />
                              </div>
                        </Col>
                  ))}
            </Row>
      );
};

export default SimilarContent;
