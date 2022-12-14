import { Fragment } from 'react';
import FileButtons from '../../Layout/FileButtons/FileButtons';
import FileDescription from '../../Layout/FileDescription/FileDescription';
import FileInfo from '../../Layout/FileInfo/FileInfo';
import classes from './Preview.module.css';

const Preview = (props) => {
      return (
            <Fragment>
                  
                        <div className="d-flex flex-column flex-lg-row">
                              <div className={classes.preview_img} >
                              <img alt="preview" src={props.data.url} />
                              </div>
                              <div
                                    className={
                                          'd-flex flex-column flex-sm-row flex-lg-column justify-content-between ' +
                                          classes.info
                                    }
                              >
                                    <FileInfo
                                          size={props.data.size}
                                          extension={props.data.extension}
                                          licence={props.data.licence}
                                    />
                                    <FileButtons />
                              </div>
                        </div>
                        <FileDescription title="Description" description={props.data.description} />
                  
            </Fragment>
      );
};

export default Preview;
