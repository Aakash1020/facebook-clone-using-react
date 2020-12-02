import React from 'react';
import SidebarRow from "./SidebarRow";
import './styles/Sidebar.css';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"



function Sidebar() {
    return <div className="sidebar">
        <SidebarRow img src="https://en.wikipedia.org/wiki/Narendra_Modi#/media/File:Prime_Minister,_Shri_Narendra_Modi,_in_New_Delhi_on_August_08,_2019_(cropped).jpg" title="Aakash Rathod"/>
        <SidebarRow 
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>;
}

export default Sidebar
