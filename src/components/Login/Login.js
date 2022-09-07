import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from '../../services/authService';

import './Login.css';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('username');
        const password = formData.get('password');

        if(email.trim() == '' || password.trim() == ''){
            setError('All field are required!');
            throw Error('All field are required!');
        }else if (email.length < 3 || email.length > 8) {
            setError('Username must be between 3 and 8 characters long');
            throw Error('Username must be between 3 and 8 characters long');
        } else if (password.length < 3 || password.length > 8) {
            setError('Password must be between 3 and 8 characters long');
            throw Error('Password must be between 3 and 8 characters long');
        }

        authService.login(email.trim(), password.trim())
            .then((authData) => {
                login(authData)
                navigate('/Iliyana-Gallery')
            }).catch((err) => {

                setError(err);
            });
        // }
    }
    return (
        <form className="login" onSubmit={onLoginHandler} method="POST">
            <div className="login__field">
                <legend>Login Form</legend>
                {
                    error.length != 0
                        ? <span className="error">{error}</span>
                        : null
                }
                <div className="username">
                    <label className="user__label" htmlFor="username">Username</label>
                    <span className="input">
                        <input name="username" type="text" placeholder="Type username..." />
                    </span>
                </div>

                <div className="password">
                    <label className="pass__label" htmlFor="password">Password</label>
                    <span className="input">
                        <input name="password" type="password" placeholder="Type password.." />
                    </span>
                </div>

                <input className="submit__btn" type="submit" value="LOGIN" />
            </div>
        </form>
    );
}

export default Login;