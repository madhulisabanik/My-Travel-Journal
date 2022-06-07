export default function Card(props) {
    console.log(props)
    return (
        <div className="card--container">
            <img src={`../images/${props.image}`} />
            <div className="card--containt">
                <div className="card--location">
                    <i className="fa fa-map-marker card--icon" aria-hidden="true"></i>
                    <span className="card--location-text">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank" className="card--link">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span className="bold">{`${props.startDate} - ${props.endDate}`}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}