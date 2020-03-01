import React from 'react'
import './Cards.css'

function Cards(props) {
    return (
        <div className="card" onClick={() => props.clickedImage(props.id)}>
            <div className="img-container">
                <img className="images" alt={props.artist} src={props.image} />
                {props.title}
            </div>
        </div>
    )
}

export default Cards
