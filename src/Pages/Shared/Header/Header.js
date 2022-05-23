import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    return (
        // <nav>
        //     
        //     
        // </nav>
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-item' to='/'>Home</Link>
                            <Link className='nav-item' to='/about'>About</Link>
                            {
                                user && <>
                                    <Link className='nav-item' to='/add-service'>Add Service</Link>
                                    <Link className='nav-item' to='/manage-service'>Manage Service</Link>
                                </>
                            }
                            {
                                user ?
                                    <Button onClick={logout} className='btn btn-danger'>Logout</Button>
                                    :
                                    <Link className='nav-item' to='/login'>Login</Link>
                            }
                            <Link className='nav-item' to='/signup'>Signup</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;