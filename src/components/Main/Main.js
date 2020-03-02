import React from 'react'
import './Main.css'

function Main(props) {
    return (
        <header className="score">
            <div className="click-start">
                <h6 className="clickStart">Click on an image to start game!</h6>
            </div>
            <div className="high-score">
                <h6 className="highScore">High Score: {props.score}</h6>
            </div>
            <div className="current-score">
                <h6 className="currentScore">Current Score: {props.topScore}</h6>
            </div>
        </header>
    )
}

export default Main
