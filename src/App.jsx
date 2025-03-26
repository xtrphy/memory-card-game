import { useState } from "react"
import Header from "./components/Header"
import Gameboard from "./components/Gameboard";
import BlurredBackground from "./components/BlurredBackground";
import YouWon from "./components/YouWon";
import './styles/App.css'
import './styles/Gameboard.css'
import './styles/Header.css'
import './styles/BlurredBackground.css'
import './styles/YouWon.css'

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Gameboard score={score} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
            <BlurredBackground />
        </>
    )
}

export default App
