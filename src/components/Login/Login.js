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

        // if (email.trim().length < 3) {
        //     validation = 1;
        // } else if (email.trim().length > 8) {
        //     validation = 2;
        // } else {
        //     validation = 0;
        authService.login(email.trim(), password.trim())
            .then((authData) => {
                login(authData)
                navigate('/home')
            }).catch((err) => {
                console.log(err);
                setError(err);
            });
        // }
    }
    return (
        <form className="login" onSubmit={onLoginHandler} method="POST">
            <div className="login__field">
                <legend>Login Form</legend>
                <div className="username">
                    <label className="user__label" htmlFor="username">Username</label>
                    <span className="input">
                        <input name="username" type="text" placeholder="Type username..." />
                    </span>
                    {/* {validation == 1 || validation == 2
                        ? validation == 1
                            ? <span className="error">Username must be at least 3 characters long.</span>
                            : null
                        : validation == 2
                            ? <span className="error">Username must be max 8 characters long.</span>
                            : null
                    } */}
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