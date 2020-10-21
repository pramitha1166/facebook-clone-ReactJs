import React from 'react';
import "./Header.css";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function header() {
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src="https://www.seekpng.com/png/full/51-516623_facebook-transparent-background-facebook-round-logo-blue-circle.png"
                    />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header_center">
                 <div class="header_option 
                 header_option--active">
                    <HomeIcon 
                    fontSize="large"/>
                 </div>
                 <div class="header_option">
                    <FlagIcon 
                    fontSize="large"/>
                 </div>
                 <div class="header_option">
                    <SubscriptionsIcon 
                    fontSize="large"/>
                 </div>
                 <div class="header_option">
                    <StorefrontIcon 
                    fontSize="large"/>
                 </div>
                 <div class="header_option">
                    <SupervisedUserCircleIcon 
                    fontSize="large"/>
                 </div>
            </div>
            <div className="header_right">
                <div class="header_info">
                    <Avatar src="https://avatars2.githubusercontent.com/u/63492955?s=400&u=c9a9bc192efd91ea667f62b6ef64576416213377&v=4" />
                    <h4>saaaf</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>  
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>  
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>                      
            </div>
        </div>
    )
}

export default header
