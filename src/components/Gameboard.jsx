import React, { useEffect, useState } from 'react';
import Card from './Card';

const Gameboard = ({ setScore, bestScore, setBestScore }) => {
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        const savedBestScore = localStorage.getItem('bestScore') || 0;
        setBestScore(savedBestScore);
    }, []);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=nVkjq9cGFIlbVAERThGhecJERfHVOdRp&q=spongebob&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
            .then((res) => res.json())
            .then((data) => {
                setCards(shuffleArray(data.data));
            })
    }, []);

    const handleCardClick = (card) => {
        if (clickedCards.includes(card.id)) {
            setScore(0);
            if (clickedCards.length > bestScore) {
                setBestScore(clickedCards.length);
                localStorage.setItem('bestScore', clickedCards.length);
            }
            setClickedCards([]);
        } else {
            setClickedCards([...clickedCards, card.id]);
            setScore(clickedCards.length + 1);
        }

        setCards(shuffleArray(cards));
    };

    return (
        <div className='gameboard'>
            {cards.map((card) => {
                return <Card key={card.id} onClick={() => handleCardClick(card)} imageSrc={card.images.fixed_height.url} />
            })}
        </div>
    );
};

const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default Gameboard;