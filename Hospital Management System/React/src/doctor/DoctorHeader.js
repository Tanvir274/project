import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function header()
{
    return(
    
        <Navbar bg="btn btn-danger" variant="dark">
        
            <Container>
        
            <Navbar.Brand href="/DoctorDashboard">DashBoard</Navbar.Brand>
        
            <Nav className="me-auto">
        
            <Nav.Link href="/CheckupTime">Set Appointment</Nav.Link>
        
            <Nav.Link href="/PataintAppointmentList">Pataint Appointment List</Nav.Link>
        
            <Nav.Link href="/PataintReview">Pataint Review</Nav.Link>
        
            <Nav.Link href="/DoctorProfile">Profile</Nav.Link>
        
        
            <Nav.Link href="/logout">Logout</Nav.Link>
        
            </Nav>
        
            </Container>
        
            
        
        </Navbar>

        
    )
}
export default header;