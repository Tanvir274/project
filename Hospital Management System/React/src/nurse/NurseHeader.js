import React from 'react';
//import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
function header()
{
    return(
        
    <Navbar bg="secondary" variant="dark">
     <Container>
     <Navbar.Brand href="/NurseHome">DashBoard</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/N_CabinList">Cabin-List</Nav.Link>
        <Nav.Link href="/N_BookedCabinAll">Booked-Cabin-List(All)</Nav.Link>    
        <Nav.Link href="/N_BookedCabin">Booked-Cabin-List(Date)</Nav.Link>
        <Nav.Link href="/Nurse_Profile">Profile</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
     </Container>
    </Navbar>
  
    
    )
}
export default header;