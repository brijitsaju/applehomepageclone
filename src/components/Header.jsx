import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-top'>
        <Container>
        
          <Nav className="me-auto">
          <Nav.Link href="#pricing"><i class="fa-brands fa-apple"></i></Nav.Link>
            <Nav.Link href="#home">Store</Nav.Link>
            <Nav.Link href="#features">Mac</Nav.Link>
            <Nav.Link href="#pricing">iPad</Nav.Link>
            <Nav.Link href="#features">iPhone</Nav.Link>
            <Nav.Link href="#pricing">Watch</Nav.Link>
            <Nav.Link href="#features">Vision</Nav.Link>
            <Nav.Link href="#pricing">AirPods</Nav.Link>
            <Nav.Link href="#features">TV &Home</Nav.Link>
            <Nav.Link href="#pricing">Entertainment</Nav.Link><Nav.Link href="#features">Mac</Nav.Link>
            <Nav.Link href="#pricing">Accessories</Nav.Link><Nav.Link href="#features">Mac</Nav.Link>
            <Nav.Link href="#pricing">Support</Nav.Link>
            <Nav.Link href="#pricing"><i class="fa-solid fa-magnifying-glass" ></i></Nav.Link>    
            
            <Nav.Link href="#pricing"><i class="fa-solid fa-bag-shopping"></i></Nav.Link>        
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
