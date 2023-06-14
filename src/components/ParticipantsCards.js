import { useState, useContext, useEffect } from "react";
import { ThemeContext } from '../App';
import { EditContext } from "./CharactersList";

function ParticipantsCards (props) {
    const { setAboutCount } = useContext(EditContext);
    const { setAllPart } = useContext(ThemeContext);
    const [cardData, setCardData] = useState(props.card);

    function saveForm () {
        setCardData((prev) => {
            let temp = {...prev};
            temp.edit_window = false;
            return temp;
        })
        setAllPart((prev) => {
            let cardToSave = {...cardData};
            cardToSave.edit_window = false;
            prev[props.idx] = cardToSave;
            return prev;
        })
        setAboutCount(prev => prev = prev - 1);
    }

    function aboutPlease () {
        setCardData((prev) => {
            let temp = {...prev};
            temp.nickname = props.card.nickname;
            temp.age = props.card.age;
            temp.gender = props.card.gender;
            temp.city = props.card.city;
            return temp;
        })
        setCardData((prev) => {
            let temp = {...prev};
            temp.edit_window = false;
            return temp;
        })
        setAboutCount(prev => prev = prev - 1);
    }

    function whatWindow () {
        setCardData((prev) => {
            let temp = {...prev};
            temp.edit_window = true;
            return temp;
        })
        setAboutCount(prev => prev = prev + 1);
    }

    return(
        <>
            {
                !cardData.edit_window ?
                <div className="part-card">
                    <p className="part-number">Participant №{props.idx + 1}.</p>
                    <div className="pard-card_content">
                        <div className="part-card_main">
                            <p className="nickname">{cardData.nickname}</p>
                            <div className="years-gender_block">
                                <p className="years">{props.card.age} years</p>
                                <p className="gender">{(cardData.gender !== '') ? `(${cardData.gender})` : ''}</p>
                            </div>
                        </div>
                        <p className="city">{cardData.city}</p>
                    </div>
                    <div className="edit-button"><span onClick={whatWindow}>edit</span></div>
                </div>
                :
                <div className="part-card_edit">
                    <p className="part-number">Participant №{props.idx + 1}.</p>
                    <div className="pard-card_content">
                        <div className="part-card_main">
                            <p className="nickname">
                                <span className="edit-text">Nickname:</span>
                                <input type="text" onChange={(e) => setCardData({...cardData, nickname: e.target.value})} value={cardData.nickname}/>
                            </p>
                            <div className="years-gender_block">
                                <p className="years">
                                    <span className="edit-text">Age:</span>
                                    <input type="text" onChange={(e) => setCardData({...cardData, age: e.target.value})} value={cardData.age}/>
                                </p>
                                <p className="gender">
                                    <span className="edit-text">Gender:</span>
                                    <input type="text" onChange={(e) => setCardData({...cardData, gender: e.target.value})} value={cardData.gender}/>
                                </p>
                            </div>
                        </div>
                        <p className="city">
                            <span className="edit-text">City:</span>
                            <input type="text" onChange={(e) => setCardData({...cardData, city: e.target.value})} value={cardData.city}/>
                        </p>
                    </div>
                    <div className="edit_form-buttons">
                        <button className="about-button" onClick={aboutPlease}>aboltion</button>
                        <button className="save-button" onClick={saveForm}>save</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ParticipantsCards;