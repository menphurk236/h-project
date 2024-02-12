import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/users', {
                name: name,
                username: username,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={Register}>
                <img className="mb-4" src="https://img2.pic.in.th/pic/Logo98c6bfecfe91ca4b.jpeg" alt="" width={300} height="auto" />
                <div className="form-floating">
                    <input type="text" className="form-control" id="username" placeholder="Enter your Username" />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Enter your Name" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="lastname" placeholder="Enter your Lastname" />
                    <label htmlFor="floatingInput">Lastname</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="confirm password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <button className="btn btn-dark w-100 py-2" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-body-secondary">Already have an account ? <a href="/">Click here</a> to Sign in</p>
            </form>
        </main>
    )
}

export default Register