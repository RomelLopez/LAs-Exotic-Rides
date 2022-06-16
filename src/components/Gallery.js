import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import carreragt from './CarPhotos/carreragt.png';
import ferrari458 from './CarPhotos/ferrari458.png';
import ferraricalifornia from './CarPhotos/ferraricalifornia.png';
import Ferrarif8 from './CarPhotos/Ferrarif8.png';
import ferrarif8_2 from './CarPhotos/ferrarif8_2.png';
import ferrarisf90 from './CarPhotos/ferrarisf90.png';
import mclaren1 from './CarPhotos/mclaren1.png';
import porsche1 from './CarPhotos/porsche1.png';
import porschecayman from './CarPhotos/porschecayman.png';
import porschegt3 from './CarPhotos/porschegt3.png';
import carcollection from './CarPhotos/carcollection.png';


import './Gallery.css';

const Gallery = () => {


    let data = [
        {
            id: 1,
            imgSrc: carcollection,
        },
        {
            id: 2,
            imgSrc: ferrari458,
        },
        {
            id: 3,
            imgSrc: ferraricalifornia,
        },
        {
            id: 4,
            imgSrc: Ferrarif8,
        },
        {
            id: 5,
            imgSrc: ferrarif8_2,
        },
        {
            id: 6,
            imgSrc: ferrarisf90,
        },
        {
            id: 7,
            imgSrc: mclaren1,
        },
        {
            id: 8,
            imgSrc: porsche1,
        },
        {
            id: 9,
            imgSrc: porschecayman,
        },

        {
            id: 10,
            imgSrc: porschegt3,
        },

        {
            id: 11,
            imgSrc: carreragt,
        }

    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '60%' }} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Gallery;