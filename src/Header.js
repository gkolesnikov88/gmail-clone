import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Apps, ArrowDropDown, Notifications} from "@mui/icons-material";

function Header(props) {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input type="text" placeholder="Search mail"/>
                <ArrowDropDown className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <Apps/>
                </IconButton>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    );
}

export default Header;