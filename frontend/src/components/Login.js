import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './../sigin.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/login', {
                username: username,
                password: password
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={Auth}>
                <img className="mb-4" src="https://img2.pic.in.th/pic/Logo98c6bfecfe91ca4b.jpeg" alt="" width={300} height="auto" />
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-dark w-100 py-2" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-body-secondary">Don't have an account yet ? <a href="/register">Click here</a> to Sign Up</p>
            </form>
        </main>
    )
}

export default Login