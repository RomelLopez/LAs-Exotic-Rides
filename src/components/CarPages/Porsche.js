import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Navbar, Navitem, DropdownMenu } from "../Navbar.js";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import porsche1 from '../CarPhotos/porsche1.png';
import porschecayman from '../CarPhotos/porschecayman.png';
import porschegt3 from '../CarPhotos/porschegt3.png';
import PorscheWhiteGas from '../CarPhotos/PorscheWhiteGas.png';
const Porsche = () => {

    let PData = [
        {
            id: 1,
            imgSrc: porsche1
        },
        {
            id: 2,
            imgSrc: porschecayman
        }
        ,
        {
            id: 3,
            imgSrc: porschegt3
        }
        ,
        {
            id: 4,
            imgSrc: PorscheWhiteGas
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
                {PData.map((item, index) => {
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

export default Porsche