import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function header()
{
    return(
     
        <Navbar bg="secondary" variant="dark">
        
            <Container>
        
            <Navbar.Brand href="/home">DashBoard</Navbar.Brand>
        
            <Nav className="me-auto">
        
            <Nav.Link href="/histray">History</Nav.Link>
        
            <Nav.Link href="/review">All Review</Nav.Link>
        
            <Nav.Link href="/rating">Give Rating</Nav.Link>
        
            <Nav.Link href="/profile">Profile</Nav.Link>
        
            <Nav.Link href="/admin">Admin</Nav.Link>
        
            <Nav.Link href="/logout">Logout</Nav.Link>
        
            </Nav>
        
            </Container>
 
        </Navbar>
    )
}
export default header;