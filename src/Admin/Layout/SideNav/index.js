import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import classes from './SideNav.module.css';
import './sidenav.css'
import sidebarLinks from '../../Constance/sidebarLinks';

const Sidebar = () => {
      return(
            <>
                  {['md'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className={"mb-3 admin_sidebar " +classes.sidebar}>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='sidebar_body'>
              <Nav className={"justify-content-end flex-grow-1 pe-3 " + classes.body_nav} defaultActiveKey="#Dashboard">
              {sidebarLinks.map((item , index) => 
                  (<>
                        {item.linksTitle && <h3 className={classes.body_title} >{item.linksTitle}</h3>}
                        {item.links.map((link) => (
                              <Nav.Link href={"#" + link.title} to={link.redairect} as={Link}  className={classes.sidebar_link} > {link.icon} {link.title}</Nav.Link>            
                        ))}
                  </>)
              )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
      ))}
            </>
      )
}

export default Sidebar;