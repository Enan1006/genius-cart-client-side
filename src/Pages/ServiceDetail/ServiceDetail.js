import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(Response => Response.json())
            .then(data => setService(data))
    }, [])
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/proceed-checkout');
    }
    return (
        <div>
            <h3>Service Detail: {service.name}</h3>
            <Button onClick={handleCheckout} className='btn btn-primary'>Proceed to checkout</Button>
        </div>
    );
};

export default ServiceDetail;