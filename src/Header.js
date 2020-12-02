import React from 'react';
import './styles/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlineIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCirculeIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Facebook_circle_pictogram.svg" alt=""/>
                <div className="header_input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text"/>
                </div>
                
            </div>
            <div className="header__middle">
                <div className="header_options
                header_options--active">
                    <HomeIcon fontSize= "large"/>
                </div>
                <div className="header_options">
                    <FlagIcon fontSize= "large"/>
                </div>
                <div className="header_options">
                    <SubscriptionsOutlineIcon fontSize= "large"/>
                </div>
                <div className="header_options">
                    <StorefrontOutlinedIcon fontSize= "large"/>
                </div>
                <div className="header_options">
                    <SupervisedUserCirculeIcon fontSize= "large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>Aakash Rathod</h4>
                </div>

                    <div>
                        <IconButton>
                            <AddIcon/>
                        </IconButton>    
                        <IconButton>
                            <ForumIcon/>
                        </IconButton>
                        <IconButton>
                            <NotificationActiveIcon/>
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon/>
                        </IconButton>
                    </div>
            </div>
            
        </div>
    )
}

export default Header
