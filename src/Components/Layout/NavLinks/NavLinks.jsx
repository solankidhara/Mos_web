import { Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
      return (
            <Fragment>
                  <Navbar.Toggle aria-controls="nav-bar" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 d-lg-flex text-center justify-content-between align-items-center">
                              <div className={'d-lg-flex ' + classes.links}>
                                    {props.menu.map((link, ind) => (
                                          <Nav.Link href="#" key={ind}>
                                                {link}
                                          </Nav.Link>
                                    ))}
                              </div>
                              <div className={'d-lg-flex ' + classes.authBtn}>
                                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                                    <Nav.Link href="/signin">Log In</Nav.Link>
                              </div>
                        </Nav>
                  </Navbar.Collapse>
            </Fragment>
      );
};

export default NavLinks;
