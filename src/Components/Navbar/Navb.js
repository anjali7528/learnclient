import React, { useContext } from 'react'
import {Navbar , Nav, Container,NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {Link as Linkscroll} from 'react-scroll' 
import { Context } from '../../context/Context';
import './navbar.css' 

const Navb = () => {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
    window.location.replace("/");
  }
  return (
    <>
    <div id="navHead"></div>
    <div id="navHeader">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Learn+</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="me-auto">
    <Linkscroll as ={Link} to="/" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Home</Linkscroll>
      <Linkscroll as ={Link} to="features" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Features</Linkscroll>
      <Linkscroll as ={Link} to="footer" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Contact us</Linkscroll>
    </Nav>

    
    <Nav>
      {user ? (
        <Button variant="primary" onClick={handleLogout} style={{margin:'20px 0 10px 0'}}>LOGOUT</Button>
      ):
      <NavDropdown title="Login" id="collasible-nav-dropdown"> 
      <NavDropdown.Item href="#action/3.1"><Link className="link" to="/login/student">Student</Link></NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2"><Link className="link" to="/login/teacher">Teacher</Link></NavDropdown.Item>
    </NavDropdown>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  </>
  )
}

export default Navb