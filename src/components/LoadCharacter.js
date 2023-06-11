import { useState, useContext } from 'react';
import { AppContext } from './AppScreen';
import { ThemeContext } from '../App';


function LoadCharacter () {
    const { allPart, setAllPart } = useContext(ThemeContext);
    const { setPage } = useContext(AppContext);
    const [pageLoad, setPageLoad] = useState(true);
    const [newPart, setNewPart] = useState({
        nickname: '',
        age: '',
        gender: '',
        city: '',
        edit_window: false
    });

    function addPart (e) {
        e.preventDefault();
        if (newPart.nickname !== '' && newPart.age !== '') {
            setAllPart((prev) => {
                prev.push(newPart);
                return prev;
            })
            setNewPart((prev) => {
                let temp = {...prev};
                temp.nickname = '';
                temp.age = '';
                temp.gender = '';
                temp.city = '';
                return temp;
            })
            setPageLoad(false);
            console.log(allPart);
        } else {
            alert('Incorrect input given! Please try agayn. Please note that the "Nickname" and "Age" lines are mandatory!');
        }
    }
        

    return(
        <>
            { pageLoad ?
            <div className='loadCharacter-block'>
                <form className='loadCharacter-form'>
                    <div>
                        <input onChange={(e) => setNewPart({...newPart, nickname: e.target.value})} type='text' placeholder='*Nickname' name='nickname' value={newPart.nickname}/>
                    </div>
                    <div>
                        <input onChange={(e) => setNewPart({...newPart, age: e.target.value})} type='text' placeholder='*Age' name='age' value={newPart.age}/>
                    </div>
                    <div>
                        <input onChange={(e) => setNewPart({...newPart, gender: e.target.value})} type='text' placeholder='Gender' name='gender' value={newPart.gender}/>
                    </div>
                    <div>
                        <input onChange={(e) => setNewPart({...newPart, city: e.target.value})} type='text' placeholder='City' name='city' value={newPart.city}/>
                    </div>
                    <div className='add-buton'>
                        <button onClick={addPart}>ADD</button>
                    </div>
                </form>
                <div className='return-buton'>
                    <button onClick={() => setPage((prev) => prev = 0)}>GO BACK</button>
                </div>
            </div>
            :
            <div className='loadPart-confirm'>
                <p>The participant has been successfully added!
                    Do you want to add another one?
                </p>
                <div className='loadPart-confirm_buttons'>
                    <div onClick={() => setPageLoad(true)}><span className='button-yes'>yes</span></div>
                    <div onClick={() => setPage((prev) => prev = 0)}><span className='button-no'>no</span></div>
                </div>
            </div >
            }
        </>
    )
}

export default LoadCharacter;