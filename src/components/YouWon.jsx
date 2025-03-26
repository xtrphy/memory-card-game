import React from 'react';

const YouWon = ({ restartGame }) => {
    return (
        <>
            <div className='modal'>
                <p className='winner'>You Won!</p>
                <button className='restart' onClick={restartGame} >Restart</button>
            </div>
            <div className='winner-background'></div>
        </>
    );
};

export default YouWon;