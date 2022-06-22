import React from "react";
import Header from './components/Header';
import './App.css';
import Gallery from "./components/Gallery";
import { Navbar, Navitem, DropdownMenu } from "./components/Navbar.js";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import Information from "./components/Information";
import { Link } from "react-router-dom";
const Main = () => {
    return (
        <div className='App'>
            <Navbar>

                <Link to="/Information">
                    <li className="nav-item">
                        <InfoIcon
                            className='icon-button'>
                            <Information />
                        </InfoIcon>
                    </li>
                </Link>
                <Navitem icon={<AddBoxIcon
                    onClick={() => window.open('mailto:romelanthonylopez@gmail.com?subject=Subject&body=Body%20goes%20here')}
                    style={{ color: "white" }}></AddBoxIcon>} />
                <Navitem icon={<NotificationsIcon style={{ color: "white" }}></NotificationsIcon>} />
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