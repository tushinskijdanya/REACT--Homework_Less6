function ParticipantsCards (props) {
    console.log(props)
    return(
        <div className="part-card">
            <p className="part-number">Participant №{props.idx + 1}.</p>
            <div className="pard-card_content">
                <div className="part-card_main">
                    <p className="nickname">{props.card.nickname}</p>
                    <div className="years-gender_block">
                        <p className="years">{props.card.age} years</p>
                        <p className="gender">{(props.card.gender !== '') ? `(${props.card.gender})` : ''}</p>
                    </div>
                </div>
                <p className="city">{props.card.city}</p>
            </div>
        </div>
    )
}

export default ParticipantsCards;