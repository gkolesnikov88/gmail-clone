import React from 'react';
import './EmailList.css';
import {
    ArrowDropDown,
    ChevronLeft,
    ChevronRight,
    Inbox,
    KeyboardHide, LocalOffer,
    More,
    People,
    Redo,
    Settings
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList(props) {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo/>
                    </IconButton>
                    <IconButton>
                        <More/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={Inbox} title='Primary' color="red" selected />
                <Section Icon={People} title='Social' color="#1A73E8" />
                <Section Icon={LocalOffer} title='Promotions' color="green" />
            </div>

            <div className="emailList__list">
                <EmailRow
                    title="Twitch"
                    subject="Hello from twitch!"
                    description="This is a test!"
                    time="10pm"
                />
            </div>
            <div className="emailList__list">
                <EmailRow
                    title="Twitch"
                    subject="Hello from twitch!"
                    description="This is a test! This is a test! This is a test! This is a test!"
                    time="10pm"
                />
            </div>
        </div>
    );
}

export default EmailList;