import React from 'react';
import './Sidebar.css';
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <Button
                className='sidebar__compose'
                startIcon={<Add fontSize='large'/>}
            >
                Compose
            </Button>
        </div>
    );
}

export default Sidebar;