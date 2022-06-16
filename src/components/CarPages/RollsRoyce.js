import React from 'react'
import { Navbar, Navitem, DropdownMenu } from "../Navbar.js";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

const RollsRoyce = () => {
    return (
        <div>
            <Navbar>
                <Navitem icon={<AddBoxIcon style={{ color: "white" }}></AddBoxIcon>} />
                <Navitem icon={<NotificationsIcon style={{ color: "white" }}></NotificationsIcon>} />
                <Navitem icon={<EmailIcon style={{ color: "white" }}></EmailIcon>} />
                <Navitem icon={<DriveEtaIcon style={{ color: "white" }}></DriveEtaIcon>}>
                    <DropdownMenu >
                    </DropdownMenu>
                </Navitem>
            </Navbar>
        </div>
    )
}

export default RollsRoyce