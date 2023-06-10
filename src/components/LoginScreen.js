import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import { eye } from '../data/eye';
import { passwords_basis } from '../data/passwords-basis';

function LoginScreen () {
    const { showAppScreen, setShowAppScreen } = useContext(ThemeContext);
    const [hide, setHide] = useState(eye);
    const [users, setUsers] = useState(passwords_basis);
    const [loginForm, setLoginForm] = useState({
        login: '',
        password: ''
    });
    const [confSaved, useConfSaved] = useState(0);

    function changeHide () {
        setHide((prev) => {
            let temp = {...prev};
            temp.hide_works = !temp.hide_works;
            if (temp.type === 'password') {
                temp.type = 'text';
            } else if (temp.type === 'text') {
                temp.type = 'password';
            }
            return temp;
        });
    }

    function loginApp (e) {
        e.preventDefault();
        let com_passwords = users.map((password) => JSON.stringify(password));
        let  intr = JSON.stringify(loginForm);
        let find = com_passwords.includes(intr);
        console.log(find);
        if (loginForm.login === '' || loginForm.password === '') {
            if (loginForm.login === '' && loginForm.password === '') {
                alert('Plese enter your login and password!');
            } else if (loginForm.login === '') {
                alert('Please enter your login!');
            } else if (loginForm.password === '') {
                alert('Please enter your password!')
            }
        } else if (!find) {
            alert('The login or password is incorrect! Please try again or register!')
        } else if (find) {
            setShowAppScreen((prev) => prev = !prev);
        }
    }

    function toRegister () {
        if (loginForm.login === '' || loginForm.password === '') {
            if (loginForm.login === '' && loginForm.password === '') {
                alert('Plese enter your login and password!');
            } else if (loginForm.login === '') {
                alert('Please enter your login!');
            } else if (loginForm.password === '') {
                alert('Please enter your password!')
            } 
        } else {
            let conf = confirm('Are you sure want to register a user with your login and password?');
            if (conf) {
                setUsers((prev) => {
                    prev.push(loginForm);
                    return prev;
                });
                localStorage.setItem('users', JSON.stringify(loginForm));
                setShowAppScreen((prev) => prev = !prev);
            }
        }
    }

    useEffect(() => {
        let newUser = JSON.parse(localStorage.getItem('users'));
        setUsers((prev) => {
            prev.push(newUser);
            return prev;
        });
    }, []);

    function useSaved (e) {
        let newUser = JSON.parse(localStorage.getItem('users'));
        if (localStorage.getItem('users') !== null && !showAppScreen) {
            let conf = confirm('Do you want to use your saved login and password?');
            if (conf) {
                setLoginForm((prev) => {
                    let temp = {...prev};
                    temp.login = newUser.login;
                    temp.password = newUser.password;
                    return temp;
                })
            }
        }

        if(e.target.name === 'login') {
            useConfSaved(1);
        } else if(e.target.name === 'password') {
            useConfSaved(2);
        }
    };
    
    return (
        <div className="login-screen">
            <div className="container">
                <div className='login-container'>
                    <h1 className='logo'>FLO-words</h1>
                    <form className='login-form'>
                        <div><input onClick={confSaved !== 2 ? ((e) => useSaved(e)) : ((e) => e.preventDefault(e))} onChange={(e) => setLoginForm({...loginForm, login: e.target.value})} value={loginForm.login} name='login' type='text' placeholder='login'/></div>
                        <div className='password-input'>
                            <input onClick={confSaved !== 1 ? ((e) => useSaved(e)) : ((e) => e.preventDefault(e))} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} value={loginForm.password} name='password' type={hide.type} placeholder='password' />
                            <div onClick={changeHide} className='password-hide'>
                                <img src={hide.hide_works ? hide.hide_off : hide.hide_on} alt="eye" />
                            </div>
                        </div> 
                        <div className='loginContainer-buttons'>
                            <div className='login-button'>
                                <button onClick={loginApp}>LOGIN</button>
                            </div>
                            <div className='registration-button'>
                                <span onClick={toRegister}>REGISTER A NEW USER</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;