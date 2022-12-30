import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Dropdown from "../../../Components/common/Dropdown";
import UserInput from "../../../Components/common/UserInput/UserInput";
import { addCategories, addContentType, addTags } from "../../../Redux/Slice/category-slice";
import CustomDatepicker from "../../Components/CustomDatepicker";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";
import { listOfContetField } from "../../Constance/listOfContentData";

const schema = Joi.object({
  name: Joi.string().required(),
  category: Joi.optional(),
  contentType: Joi.optional(),
  tagOne:Joi.optional(),
  tagTwo:Joi.optional(),
  description: Joi.string().optional(),
  mainFile:Joi.optional(),
  thumbFile:Joi.optional(),
  waterMarkFile:Joi.optional(),
});

const ListOfContent = () => {
  const [show, setShow] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [contentType ,setContentType] = useState([])
  const [contentList ,setContentList] = useState([])
  const [tagList , setTagList] = useState([])

  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
        resolver: joiResolver(schema),
  });

  const onSubmit = async (content) => {
    try {
      const formData = new FormData();
      formData.append("content_type_id", content.contentType.value);
      formData.append("name", content.name);
      formData.append("description", content.description);
      formData.append("category_id", content.category.value);
      formData.append("tagOne", content.tagOne.value);
      formData.append("tagTwo", content.tagTwo.value);
      formData.append("mainFile" ,content.mainFile);
      formData.append("thumbFile", content.thumbFile);
      formData.append("waterMarkFile", content.waterMarkFile);
      const res = await axios.post("admin/add-content", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }});
        if(res.status === 200){
          setShow(false)          
        }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = async(e , name) => {
    setValue(name , e.target.files[0])
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/admin/category");
      const response = await axios.get("/admin/content-type")
      const res = await axios.get("/admin/content-list")
      const tags = await axios.get("/admin/tag")
      setContentType(response.data)
      setCategoryList(data);
      setContentList(res.data)
      setTagList(tags.data)
      dispatch(addContentType(response.data))
      dispatch(addCategories(data))
      dispatch(addTags(tags.data))
    })();
  }, [show]);
  
  return (
    <>
      <Row className="mb-5">
        <Col>
          <h4>List View Of Content</h4>
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
      <CustomTable columns={listOfContetField} rows={contentList} dataKey={"_id"}  size={"large"} />
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>No</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="text" placeholder="Enter Text" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Type of Content</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown control={control} name="contentType" options={contentType} defaultValue={true} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Category</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown control={control} name="category" options={categoryList} defaultValue={true} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Tag</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown control={control} name="tagOne" options={tagList} defaultValue={true} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Tag_2</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown control={control} name="tagTwo" options={tagList} defaultValue={true} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col md={5}>
                  <UserInput type="text" name="name" control={control} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col md={5}>
                  <UserInput type="text" name="description" control={control} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Id</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="text" placeholder="Content Name" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>MainFile</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="file" name="mainFile" placeholder="mainFile"  className="mb-3" onChange={(e)=>{handleChange(e , "mainFile")}}/>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <Form.Label>thumbFile</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="file" name="thumbFile"  className="mb-3" onChange={(e)=>{handleChange(e , "thumbFile")}}/>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <Form.Label>waterMarkFile</Form.Label>
                </Col>
                <Col md={5}>
                <Form.Control type="file" name="waterMarkFile"  className="mb-3" onChange={(e)=>{handleChange(e , "waterMarkFile")}}/>
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

export default ListOfContent;
