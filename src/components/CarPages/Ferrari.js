import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Navbar, Navitem, DropdownMenu } from "../Navbar.js";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ferrari458 from '../CarPhotos/ferrari458.png';
import Ferrariblack from '../CarPhotos/Ferrariblack.png';
import ferraricalifornia from '../CarPhotos/ferraricalifornia.png';
import ferrarif8_2 from '../CarPhotos/ferrarif8_2.png';
import Ferrarif8 from '../CarPhotos/Ferrarif8.png';
import FerrariLightBlue from '../CarPhotos/FerrariLightBlue.png';
import FerrariLightBlueRear from '../CarPhotos/FerrariLightBlueRear.png';
import FerrariRedGas from '../CarPhotos/FerrariRedGas.png';
import ferrarisf90 from '../CarPhotos/ferrarisf90.png';
import FerrariSf90red from '../CarPhotos/FerrariSf90red.png';
import FerrariSilver from '../CarPhotos/FerrariSilver.png';
import FerrariStealthBlack from '../CarPhotos/FerrariStealthBlack.png';

const Ferrari = () => {

    let FData = [
        {
            id: 1,
            imgSrc: ferrari458
        },
        {
            id: 2,
            imgSrc: Ferrariblack
        },
        {
            id: 3,
            imgSrc: ferraricalifornia
        },
        {
            id: 4,
            imgSrc: ferrarif8_2
        },
        {
            id: 5,
            imgSrc: Ferrarif8
        },
        {
            id: 6,
            imgSrc: FerrariLightBlue
        },
        {
            id: 7,
            imgSrc: FerrariLightBlueRear
        },
        {
            id: 8,
            imgSrc: FerrariRedGas
        },
        {
            id: 9,
            imgSrc: ferrarisf90
        },
        {
            id: 10,
            imgSrc: FerrariSf90red
        },
        {
            id: 11,
            imgSrc: FerrariSilver
        },
        {
            id: 12,
            imgSrc: FerrariStealthBlack
        }
    ]

    const [model, setModel] = useState(false)
    const [TempImgSrc, setTempingImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempingImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
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
                {FData.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '70%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Ferrari;