import { Fragment } from 'react';
import FileButtons from '../../Layout/FileButtons/FileButtons';
import FileDescription from '../../Layout/FileDescription/FileDescription';
import FileInfo from '../../Layout/FileInfo/FileInfo';
import classes from './Preview.module.css';

const Preview = ({data , selectedImage}) => {
      return (
            <Fragment>
                  
                        <div className="d-flex flex-column flex-lg-row">
                              <div className={classes.preview_img} >
                              <img alt="preview" src={selectedImage?.waterMarkFile} className="img-fluid"/>
                              </div>
                              <div
                                    className={
                                          'd-flex flex-column flex-sm-row flex-lg-column justify-content-between ' +
                                          classes.info
                                    }
                              >
                                    <FileInfo
                                          size={data.size}
                                          extension={data.extension}
                                          licence={data.licence}
                                    />
                                    <FileButtons />
                              </div>
                        </div>
                        <FileDescription title="Description" description={data.description} />
                  
            </Fragment>
      );
};

export default Preview;
