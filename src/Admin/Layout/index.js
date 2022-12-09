import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';


import './layout.css';
import Sidebar from './SideNav';

const Admin = () => {
      return (
            <>
                  <Row className="g-0 admin_body">
                        <Col lg={2} md={3}>
                              <Sidebar />
                        </Col>
                        <Col lg={10} md={9} className="px-5 py-2">
                              <DashboardHeader
                                    greet="Good Morning"
                                    uname="Mr. ABCD"
                                    userDp="/images/admin/adminDp.png"
                              />
                              <Outlet />
                        </Col>
                  </Row>
            </>
      );
};

export default Admin;
