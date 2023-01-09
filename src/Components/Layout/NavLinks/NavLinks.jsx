import axios from 'axios';
import { Fragment, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import DiaLogComponent from '../../../Admin/common/model';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
      const [visible, setIsVisible] = useState(false);

      const modelHandler = () => {
        setIsVisible(!visible);
      };
    
      const onHide = () => {
          setIsVisible(false);
        };
    


      const navigate = useNavigate()
      
      const logoutHandler = async() => {
        const {data} = await axios.post('users/logout')
            if(data){
                  localStorage.removeItem("token")
                  return navigate("/signin")
            }
      }
      return (
            <Fragment>
                  <Navbar.Toggle aria-controls="nav-bar" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 d-lg-flex text-center justify-content-between align-items-center">
                              <div className={'d-lg-flex ' + classes.links}>
                                    {props.menu.map((link, index) => (
                                          <Link to={link.url} key={index} onClick={link.url==="#" && modelHandler}>
                                                {link.name}
                                          </Link>
                                    ))}
                              </div>
                              <div className={'d-lg-flex ' + classes.authBtn}>
                                    <Link to="/" onClick={logoutHandler}>Log out</Link>
                              </div>
                        </Nav>
                  </Navbar.Collapse>
                  <DiaLogComponent
                    isVisible={visible}
                    header="Warning"
                        onHide={onHide}
                        style={{ height: "100%" }}
                  >
                       <p>You are currently in protected mode please contact administrator</p>
                  </DiaLogComponent>
            </Fragment>
      );
};

export default NavLinks;
