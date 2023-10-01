import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className=" bg-secondary bg-body-primary">
      <Container>
        <Navbar.Brand href="#home"className=''>FSMS</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="justify-content-center me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Societies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Procom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ACM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GDSC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Procom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Coders Cup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Developers Day</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;