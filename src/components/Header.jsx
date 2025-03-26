import React from 'react';

const Header = ({ score, bestScore }) => {
    return (
        <header className='header'>
            <div className="game-info">
                <h1 className='title'>Spongebob Memory Game</h1>
                <p className='rules'>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className="score">
                <p className='score'>Score: {score}</p>
                <p className='best-score'>Best score: {bestScore}</p>
            </div>
        </header>
    );
};

export default Header;