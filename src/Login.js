import React from 'react'
import "./styles/Login.css"
import {auth, provider} from "./firebase"

function Login() {
    const signIn = () =>{
        //signin...
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt=""/>
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>
            </div>
            
            
        </div>
    )
}

export default Login
