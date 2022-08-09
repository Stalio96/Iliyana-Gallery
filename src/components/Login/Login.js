import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from '../../services/authService';

import './Login.css';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('username');
        const password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData)
                navigate('/home')
            });
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