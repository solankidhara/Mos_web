import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import {  useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import UserInput from "../../../Components/common/UserInput/UserInput";
import { addTags } from "../../../Redux/Slice/category-slice";
import CustomDatepicker from "../../Components/CustomDatepicker";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";
import { tagTableField } from "../../Constance/tagTableData";


const schema = Joi.object({
  tagName: Joi.string().required(),
});

const Tags = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()
  const tags = useSelector(state => state.categories.tags)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      const tags = await axios.get("/admin/tag")
      dispatch(addTags(tags.data))
    })();
  }, [show ,dispatch]);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
        resolver: joiResolver(schema),
  });

  const onSubmit = async (content) => {
    try {
      const res = await axios.post("admin/add-tag", content);
        if(res.status === 200){
          const tags = await axios.get("/admin/tag")
          dispatch(addTags(tags.data))
          setShow(false)          
        }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Row className="mb-5">
        <Col>
          <h4>List View Of Tag</h4>
        </Col>
        <Col className="text-end">
          <div className="d-inline-block me-3">
            <Form.Select style={{ height: "40px" }}>
              <option>Select Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <CustomDatepicker className={"me-3"} />
          <FilledBtn text="Add Data" onClick={handleShow} />
        </Col>
      </Row>
      <CustomTable columns={tagTableField} rows={tags}  dataKey={"_id"}  size={"large"}/>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>      
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Tag Title</Form.Label>
                </Col>
                <Col md={5}>
                  <UserInput type="text" name="tagName" control={control} />
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

export default Tags;
