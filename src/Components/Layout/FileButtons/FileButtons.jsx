import axios from 'axios';
import { saveAs } from 'file-saver'
import { Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import classes from "./FileButtons.module.css";

const FileButtons = () => {
      const {id} =useParams()
      const handleDownload = async (e) => {
        try {
          const { data } = await axios.get(`/users/main-file/${id}`);
          saveAs(data?.mainFile)
        } catch (e) {
          console.log(e);
        }
  };
  return (
    <div className={"d-flex flex-column " + classes.btns}>
      <Button variant="dark">
        <img alt="" src="./images/Share.png" />
        <span className="mx-2">Share</span>
      </Button>
      <Button variant="dark">
        <img alt="" src="./images/Like.png" />
        <span className="mx-2">Save</span>
      </Button>
      <Button variant="dark" onClick={handleDownload}>
        Download Now
      </Button>
    </div>
  );
};

export default FileButtons;
