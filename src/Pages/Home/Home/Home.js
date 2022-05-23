import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            {
                user ?
                    user.email :
                    "No User"
            }
            <Banner></Banner>
            <Services></Services>
            {/* <Experts></Experts> */}
        </>
    );
};

export default Home;