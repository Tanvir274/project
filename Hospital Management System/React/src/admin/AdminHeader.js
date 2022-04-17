import React from 'react';
//import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
function header()
{
    return(
        <Navbar bg="secondary" variant="dark">
        <Container>
        <Navbar.Brand href="/AdminDashboard">DashBoard</Navbar.Brand>
           <Nav className="me-auto">
           <Nav.Link href="/A_DoctorAppointmentList">Appointment-Checkup</Nav.Link>
           <Nav.Link href="/A_LabtestAppointmentList">Appointment-Labtest</Nav.Link>    
           <Nav.Link href="/DoctorList">Doctor</Nav.Link>
           <Nav.Link href="/PataintList">Pataint</Nav.Link>
           <Nav.Link href="/NurseList">Nurse</Nav.Link>
           <Nav.Link href="/PharmacyEmployee">Pharmacian</Nav.Link>
           <Nav.Link href="/A_LabtestList">Labtest-list</Nav.Link>
           <Nav.Link href="/A_MedicinList">Medicin</Nav.Link>
           <Nav.Link href="/A_SellerList">Medicin Sell</Nav.Link>
           <Nav.Link href="/AdminProfile">Profile</Nav.Link>
           <Nav.Link href="/logout">Logout</Nav.Link>
           </Nav>
        </Container>
       </Navbar>
    )
}
export default header;