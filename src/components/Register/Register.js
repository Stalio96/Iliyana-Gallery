import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from '../../services/authService';

const Register = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        authService.register(email, password)
            .then(authData => {
                login(authData)
                navigate('/home');
            })
    }
    return (
        <form className="register" onSubmit={onRegisterHandler} method="POST">
            <fieldset>
                <legend>Register Form</legend>
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

                <div className="rePass">
                    <label htmlFor="rePass">Repeat password</label>
                    <span className="input">
                        <input name="rePass" type="password" placeholder="" />
                    </span>
                </div>

                <input type="submit" value="Register" />
            </fieldset>
        </form>
    );
}

export default Register;