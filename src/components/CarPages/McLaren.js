import React, { useState } from 'react'
import { Navbar, Navitem, DropdownMenu } from "../Navbar.js";
import CloseIcon from '@mui/icons-material/Close';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import mclaren1 from '../CarPhotos/mclaren1.png';
import McLarenBlack from '../CarPhotos/McLarenBlack.png';



const McLaren = () => {


    let MData = [
        {
            id: 1,
            imgSrc: mclaren1
        },
        {
            id: 2,
            imgSrc: McLarenBlack
        }
    ]

    const [model, setModel] = useState(false)
    const [TempImgSrc, setTempingImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempingImgSrc(imgSrc);
        setModel(true);
    }
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
            <div className={model ? 'model open' : 'model'} >
                <img src={TempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery' >
                {MData.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '70%' }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default McLaren;