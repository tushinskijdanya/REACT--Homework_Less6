function ParticipantsCards (props) {
    console.log(props)
    return(
        <div className="part-card">
            <p className="part-number">{(props.card.idx + 1)}.</p>
            <div className="pard-card_content">
                <div className="part-card_main">
                    <p className="nickname">{props.card.nickname}</p>
                    <p>age: {props.card.age}</p>
                </div>
                <div className="part-card_gender-city">
                    <p>{props.card.gender}</p>
                    <p>{props.card.city}</p>
                </div>
            </div>
        </div>
    )
}

export default ParticipantsCards;