export default function Star(props) {
    let starIcon = props.isFilled ? "../images/star-filled.svg" : "../images/star-empty.svg"
    return (
        <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={props.handleClick}
                        alt="Star"
                    />
    )
}