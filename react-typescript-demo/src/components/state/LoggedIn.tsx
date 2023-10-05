import React from 'react';
import { useState } from 'react';


const LoggedIn = () => {
    const [isloggedIn, setisloggedIn] = useState(false)
    const handleLogin = () => {
        setisloggedIn(true)
    }
    const handleLogout = () => {
        setisloggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>The user is {isloggedIn ? 'logged In': 'Logged out'}</div>
        </div>
    );
};

export default LoggedIn;