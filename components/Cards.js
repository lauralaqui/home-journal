import React from 'react'

export default function Cards(props) {
    return (
        <div className="card--container">
            <img src={`${props.destination.imageUrl}`} className="card--img" alt="image of travel destination"/>
            
            <div className="card--description">
                <div className="card--location">
                    <img src="./images/location-pin.png" className="card--icon" alt="location pin icon"/>
                    <div className="card--country">{props.destination.location}</div>
                    <a href={`${props.destination.googleMapsUrl}`} target="_blank" className="card--map">View on Google Maps</a>
                </div>            
                <h1 className="card--title">{props.destination.title}</h1>  
                <p className="card--dates"><span>{props.destination.startDate}</span> - <span>{props.destination.endDate}</span></p>
                <p className="card--description">{props.destination.description}</p>
            </div>  
        </div>
    )
}