import React from 'react'
import "./styles/Login.css"
import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';

function Login() {
    const [state , dispatch] = useStateValue();

    const signIn = () =>{
        //signin...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
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
