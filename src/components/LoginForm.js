import React from 'react';
import { useDispatch } from 'react-redux';
import { showRegister } from '../redux/actions';
import profilePic from '../assets/profile.jpeg'

const LoginForm = () => {
    const dispatch = useDispatch();

    return (
        <div className="form-box">
        <img src={profilePic} alt="Profile" className="avatar" />
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                <small>Don't have an account? <a onClick={() => dispatch(showRegister())}>Register</a></small>
            </form>
        </div>
    );
};

export default LoginForm;
