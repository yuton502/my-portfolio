import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";

const pageStyle: React.CSSProperties = {
  color: 'black',
}

const Header: React.FC = () => {
  return (
    <header className="bg-secondary">
      <Container style={pageStyle}>
        <Navbar expand="md" variant="dark">
          <Navbar.Brand>Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive" >
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="#skills" className="nav-link" activeClassName="active">Skills</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="#" className="nav-link" activeClassName="active">Page3</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Container> 
    </header>
  )
}

export default Header;
