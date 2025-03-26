import { useState } from "react"
import Header from "./components/Header"
import Gameboard from "./components/Gameboard";
import './styles/App.css'
import './styles/Gameboard.css'
import './styles/Header.css'
import './styles/BlurredBackground.css'
import BlurredBackground from "./components/BlurredBackground";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Gameboard setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
            <BlurredBackground />
        </>
    )
}

export default App
