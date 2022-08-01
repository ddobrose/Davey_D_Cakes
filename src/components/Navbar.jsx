import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const TopNav = () => {
  const {user,logoutUser} = useContext(AuthContext)
  return (
    <>

<Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href='/'><img src="/images/daveydcakes.png" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className='.mr-auto'>
          
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/rewards">Rewards</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/find">Find Store</Nav.Link>
          
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={user? `Hello, ${user.username}`: 'Sign In'}
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={logoutUser} href="/login">{user? "Log Out" : "Log in"}</NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href="/testregister">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/orderhistory">
                Previous Orders
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 

    
    </>
  )
}



