import React from 'react'

function Cards(props) {
    return (
        <div className="card" onClick={() => props.clickedImage(props.id)}>
            <div className="img-container">
                <img alt={props.artist} src={props.image} />
                <div className="overlay">
                    <div className="text">
                        {props.title}
                        <br />
                        <br />
                        {props.artist}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
