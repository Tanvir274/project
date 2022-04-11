import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function header()
{
    return(
    

        <Navbar bg="secondary" variant="dark">
        
                <Container>
            
                <Navbar.Brand href="/P_MedicinList">DashBoard</Navbar.Brand>
            
                <Nav className="me-auto">
            
                <Nav.Link href="/P_AddMedicin">Add Medicin</Nav.Link>
            
                <Nav.Link href="/P_MedicinSell">Update Sell</Nav.Link>
            
                <Nav.Link href="/P_SellHistory">Sell History</Nav.Link>
            
                <Nav.Link href="/P_Profile">Profile</Nav.Link>
            
                <Nav.Link href="/logout">Logout</Nav.Link>
            
                </Nav>
            
                </Container>

        </Navbar>


    )
}
export default header;