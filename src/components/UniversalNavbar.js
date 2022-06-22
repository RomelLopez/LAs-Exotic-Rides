import React from "react";
import { Navbar, Navitem, DropdownMenu } from "../components/Navbar.js";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

const UniversalNavbar = () => {

    return (
        <Navbar>
            <Link to="/Information">
                <li className="nav-item">
                    <InfoIcon
                        className='icon-button'>

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

    )
}

export default UniversalNavbar;