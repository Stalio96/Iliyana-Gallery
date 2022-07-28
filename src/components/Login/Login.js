import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                navigate('/home')
            });
    }
    return (
        <form className="login" onSubmit={onLoginHandler} method="POST">
            <fieldset>
                <legend>Login Form</legend>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input name="email" type="text" placeholder="" />
                    </span>
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input name="password" type="password" placeholder="" />
                    </span>
                </div>

                <input type="submit" value="Login" />
            </fieldset>
        </form>
    );
}

export default Login;