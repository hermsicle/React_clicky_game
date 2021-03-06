import React from 'react'
import './Cards.css'

function Cards(props) {
    return (
        <div className="card" onClick={() => props.clickedImage(props.id)}>
            <img className="images" alt={props.artist} src={props.image} />
        </div>
    )
}

export default Cards
