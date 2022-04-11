import React from 'react';
//import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
function header()
{
    return(
        
    <Navbar bg="btn btn-danger" variant="dark">
     <Container>
     <Navbar.Brand href="/NurseHome">DashBoard</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/Nurse_Profile">Profile</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
     </Container>
    </Navbar>
  
    
    )
}
export default header;