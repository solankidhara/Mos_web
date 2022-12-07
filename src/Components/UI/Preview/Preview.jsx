import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import FileButtons from '../../Layout/FileButtons/FileButtons';
import FileDescription from '../../Layout/FileDescription/FileDescription';
import FileInfo from '../../Layout/FileInfo/FileInfo';
import classes from './Preview.module.css';

const Preview = (props) => {
      return (
            <Fragment>
                  <Container className="d-flex flex-column justify-content-center">
                        <div className="d-flex flex-column flex-lg-row justify-content-center">
                              <img className="img-fluid" alt="preview" src={props.data.url} />
                              <div
                                    className={
                                          'd-flex flex-column flex-sm-row flex-lg-column justify-content-between align-items-center ' +
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
                  </Container>
            </Fragment>
      );
};

export default Preview;
