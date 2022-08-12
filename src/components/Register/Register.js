import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from '../../services/authService';

import './Register.css';

const Register = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('username');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if(email.trim() == '' || password.trim() == '' || rePass.trim() == ''){
            setError('All field are required!');
            throw Error('All field are required!');
        }else if (email.length < 3 || email.length > 8) {
            setError('Username must be between 3 and 8 characters long');
            throw Error('Username must be between 3 and 8 characters long');
        } else if (password.length < 3 || password.length > 8) {
            setError('Password must be between 3 and 8 characters long');
            throw Error('Password must be between 3 and 8 characters long');
        } else if (password != rePass) {
            setError("Passwords don't match");
            throw new Error("Passwords don't match");
        }

        authService.register(email.trim(), password.trim())
            .then(authData => {
                if(authData.message == 'This user is already registered!') {
                    throw Error('Username is taken');
                }
                console.log(authData)
                login(authData)
                navigate('/home');
            }).catch(err => {
                console.log(err)
                setError(err.message);
            });
    }
    return (
        <form className="register" onSubmit={onRegisterHandler} method="POST">
            <div className="field">
                <legend>Register Form</legend>
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

                <div className="rePass">
                    <label className="rePass__label" htmlFor="rePass">Repeat password</label>
                    <span className="input">
                        <input name="rePass" type="password" placeholder="Repeat password..." />
                    </span>
                </div>

                <input className="submit__btn" type="submit" value="REGISTER" />
            </div>
        </form>
    );
}

export default Register;