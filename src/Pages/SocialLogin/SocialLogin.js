import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './SocialLogin.css';
import googleImg from '../../Images/social/google-logo.png';
import fbImg from '../../Images/social/fb-logo.png';
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const [signInWithGithub, usergit, loadinggit, errorgit] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errormessage;
    if (error || errorgit) {
        return <Loading></Loading>
    }
    if (error || errorgit) {
        errormessage =
            <div>
                <p>Error: {error?.message} {errorgit?.message}</p>
            </div>
    }

    if (user || usergit) {
        navigate('/');
    }

    return (
        <div>

            <div className='container d-flex align-items-center'>
                <div className='w-50 bg-primary' style={{ height: '1px' }}></div>
                <p className='px-2 mt-3'>or</p>
                <div className='w-50 bg-primary' style={{ height: '1px' }}></div>
            </div>

            <div>
                <button className=' btn-google'>
                    <img style={{ width: '50px' }} src={googleImg} alt='' />
                    Signup with Google
                </button>
                <br />
                <button className='btn-google' onClick={() => signInWithFacebook()}>
                    <img style={{ width: '50px' }} src={fbImg} alt='' />
                    Signup with Facebook
                </button>
                <br />
                <button className='btn-google' onClick={() => signInWithGithub()}>
                    <img style={{ width: '50px' }} src={googleImg} alt='' />
                    Signup with Github
                </button>
                {errormessage}
            </div>
        </div>
    );
};

export default SocialLogin;