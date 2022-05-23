import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [agreed, setAgreed] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth
        , { sendEmailVerification: true }
        // , { sendEmailVerification: true }
    );
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    // const navigateLogin = () => {
    //     navigate('/login');
    // }
    const handleSignup = async (event) => {
        event.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        alert('Updated profile');
        console.log('Updated profile');
        navigate('/about');
    }

    return (
        <div className='container'>
            <h1 className='mt-5'>Sign Up</h1>
            <Form onSubmit={handleSignup} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <input onClick={() => setAgreed(!agreed)} className='mt-1 me-2' type="checkbox" name="terms" id="" />
                <label className={`ps-2 pb-3 ${agreed ? 'text-primary' : 'text-danger'}`} htmlFor='terms'> Agree to Genius Car Terms & Condition? </label>
                <br />
                <Button
                    className='mb-3'
                    disabled={!agreed}
                    variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;