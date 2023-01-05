import { Navbar } from 'react-bootstrap';

const NavLogo = () => {
      return (
            <Navbar.Brand href="/">
                  <img alt="logo" src="/images/logo.jpg" className="inline-block align-top" width="247px" height="42px"/>
            </Navbar.Brand>
      );
};

export default NavLogo;
