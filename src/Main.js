import React from "react";
import Header from './components/Header';
import './App.css';
import Gallery from "./components/Gallery";
import { Navbar, Navitem, DropdownMenu } from "./components/Navbar.js";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

const Main = () => {
    return (
        <div className='App'>
            <Navbar>
                <Navitem icon={<AddBoxIcon
                    onClick={() => window.open('mailto:romelanthonylopez@gmail.com?subject=Subject&body=Body%20goes%20here')}
                    style={{ color: "white" }}></AddBoxIcon>} />
                <Navitem icon={<NotificationsIcon style={{ color: "white" }}></NotificationsIcon>} />
                <Navitem icon={<EmailIcon style={{ color: "white" }}></EmailIcon>} />
                <Navitem icon={<DriveEtaIcon style={{ color: "white" }}></DriveEtaIcon>}>
                    <DropdownMenu >
                    </DropdownMenu>
                </Navitem>
            </Navbar>
            <Header />
            <h1 style={{ textAlign: 'center', color: '#ff8' }}>Gallery </h1>
            <Gallery />
        </div>
    )
}

export default Main;