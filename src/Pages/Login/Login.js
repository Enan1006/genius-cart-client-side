import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let errormessage;
    if (error) {
        errormessage =
            <div>
                <p>Error: {error?.message} </p>
            </div>
    }

    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

    if (error) {
        return <Loading />
    }


    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    const handleRestEmail = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter email address')
        }
    }


    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h1 className='text-center'>Login!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errormessage}
            <p>New to Genius Car? <Link to="/signup" className='text-danger pe-auto text-decoration-none'>Please Register</Link> </p>
            <p>New to Genius Car? <button onClick={handleRestEmail} className='resetPass text-danger pe-auto text-decoration-none'>Reset Email</button> </p>
            <ToastContainer />
        </div>
    );
};

export default Login;