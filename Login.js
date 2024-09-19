import React, { useState } from 'react';
import './Login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleRegister = () => {
        // Add your register logic here
        console.log('Register button clicked');
    };

    // const handleForgotPassword = () => {
    //     // Add your forgot password logic here
    //     console.log('Forgot Password button clicked');
    // };

    return (
        <>
        <div className='head'>
            <h1>Digikey</h1>
        </div>
        <div className='login'>
            <h2 className='clr'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        {/* <label htmlFor="username">Username/Email:</label> */}
                        <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder='Email/Username'
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password:</label> */}
                        <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" id='abc'>Login</button>
                        <br></br>
                        <br></br>
                        <a href="#">forget password</a>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>
                    </div>
                </div> 

            </form>
            <div className='clr'>
                {/* <button type="button" onClick={handleForgotPassword}>Forgot Password</button> */}
             <p>Don't have an account?</p>
                <br></br>
                <button type="button" id='def' onClick={handleRegister}>Register</button>
                <br></br><br></br>
            </div>
             
        </div>
        <footer id='bg'>
            <p>Copyright @ 1995-2924, Digikey</p>
            <p>All Rights Reserved.</p>
            <p>Terms &amp; Conditions|Privacy Statement</p>
        </footer>

        </>
    );
}

export default Login;
