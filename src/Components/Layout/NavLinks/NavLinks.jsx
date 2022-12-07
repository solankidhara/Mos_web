import { Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
      return (
            <Fragment>
                  <Navbar.Toggle aria-controls="nav-bar" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 d-lg-flex text-center justify-content-between align-items-center">
                              <div className={'d-lg-flex ' + classes.links}>
                                    {props.menu.map((link, index) => (
                                          <Link to={link.url} key={index}>
                                                {link.name}
                                          </Link>
                                    ))}
                              </div>
                              <div className={'d-lg-flex ' + classes.authBtn}>
                                    <Link to="/signup">Sign Up</Link>
                                    <Link to="/signin">Log In</Link>
                              </div>
                        </Nav>
                  </Navbar.Collapse>
            </Fragment>
      );
};

export default NavLinks;
