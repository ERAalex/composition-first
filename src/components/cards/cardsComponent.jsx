

export default function CardsComponent(props) {
    const {image_link='', title, info, button_text, button_link} = props

    return (
        <div className="card">
            <div className="img-box">
                {image_link != '' ?<img src={image_link} className="card-img-top image-size" alt="..."/> : ''}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{info}</p>
                <a href={button_link} target="_blank" className="btn btn-primary">{button_text}</a>
            </div>
        </div>
    )
    
}

