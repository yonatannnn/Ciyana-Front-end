import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/ciyana-high-resolution-logo.png';
import '../styles/Header.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#"> <img src={logo} alt="Ciyana" className='logo-on-nav-bar text-dark' />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> Home </Nav.Link>
            <Nav.Link href="#action2">Categories</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Orders</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button  className='bg-success outline-dark'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;