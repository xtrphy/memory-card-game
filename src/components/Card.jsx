import React from 'react';

const Card = ({ imageSrc, onClick }) => {
    return (
        <img className='image' onClick={onClick} src={imageSrc} alt="Spongebob" />
    );
};

export default Card;