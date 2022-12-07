import { Button } from 'react-bootstrap';
import classes from './FileButtons.module.css';

const FileButtons = () => {
      return (
            <div className={'d-flex flex-column ' + classes.btns}>
                  <Button variant="dark">
                        <img alt="" src="./images/Share.png" />
                        <span className="mx-2">Share</span>
                  </Button>
                  <Button variant="dark">
                        <img alt="" src="./images/Like.png" />
                        <span className="mx-2">Save</span>
                  </Button>
                  <Button variant="dark">Download Now</Button>
            </div>
      );
};

export default FileButtons;
