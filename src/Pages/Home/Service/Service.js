import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, img, name, price, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = _id => {
        navigate(`/service/${_id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='' />
            <h3>{name}</h3>
            <h5>Servie charge: ${price}</h5>
            <p>{description}</p>
            <button onClick={() => handleServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;