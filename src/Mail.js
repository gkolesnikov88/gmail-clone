import React from 'react';
import './Mail.css';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
    ArrowBack,
    CheckCircle,
    Delete,
    Email,
    Error, ExitToApp,
    LabelImportant, MoreVert,
    MoveToInbox, Print, UnfoldMore,
    WatchLater
} from "@mui/icons-material";

function Mail(props) {
    const navigation = useNavigate();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigation("/")} >
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email/>
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore/>
                    </IconButton>
                    <IconButton>
                        <Print/>
                    </IconButton>
                    <IconButton>
                        <ExitToApp/>
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__bodyHeader">
                   <h2>subject</h2>
                   <LabelImportant className="mail__important" />
                    <p>title</p>
                    <p className="mail__time">time</p>
                </div>

                <div className="mail__message">
                    <p>Message right here</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;