import React, {useEffect, useState} from 'react';
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
import { db } from "./firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const citiesQuery = query(
            collection(db, "emails"),
            orderBy("timestamp", "desc")
        );
        onSnapshot(citiesQuery, (querySnapshot) => {
            setEmails(querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    data: data,
                }
            }));
        });
    }, [])

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
                {emails.map(({id , data: {to, subject, message, timestamp}}) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    );
}

export default EmailList;