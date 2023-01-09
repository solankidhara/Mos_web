import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './similarcontent.module.css'


const SimilarContent = (props) => {      
      const navigate = useNavigate()
      
      const handleThumbImage = (id) => {
            navigate("/frame/" + id);
      };

      return (
            <Row className="g-4" >
                  {props.content.map((img, index) => (
                        <Col key={index} lg={2} md={3} sm={4} xs={6} onClick={()=>handleThumbImage(img._id)}>
                              <div className={classes.similarImg}>
                                    <img
                                          alt="related content"
                                          src={img.thumbFile}
                                    />
                              </div>
                        </Col>
                  ))}
            </Row>
      );
};

export default SimilarContent;
