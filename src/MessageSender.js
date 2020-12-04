import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./styles/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";


function MessageSender() {
    const [{ user }] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={ (e) => setInput(e.target.value)}
                    className="messagesender__input" 
                    placeholder={`Whats on your mind, ${user.displayName}?`}/>
                    <input  
                    value={imageUrl}
                    onChange={ (e) => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messagesender__button">
                <div className="messagesender__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messagesender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messagesender__option">
                    <InsertEmotionIcon style={{color: "yellow"}}/>
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
            
        </div>
    )
}

export default MessageSender
