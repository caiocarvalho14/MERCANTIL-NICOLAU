import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NfLogo from '../png/NFlogowback2.svg'
function NavBar() {
  return (
    <Navbar expand="lg" className="d-flex flex-column p-0 fixed-top bg-white shadow-lg">
      <div className='p-1 d-flex justify-content-between w-100 bg-danger text-warning'>
        <div>
          <a href="https://wa.me/86994779375"><i className="bi bi-telephone-fill"></i> (86) 99477-9375</a>
        </div>
        O barato é aqui!
      </div>
      <Container className='p-2 bg-white'>
        <img src={NfLogo} alt="" style={{ height: '35px' }} />
        <Navbar.Brand href="#inicio" className='p-2'>
          Mercantil Nicolau Filho
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Início</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;