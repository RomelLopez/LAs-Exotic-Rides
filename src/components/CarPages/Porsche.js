import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import porsche1 from '../CarPhotos/porsche1.png';
import porschecayman from '../CarPhotos/porschecayman.png';
import porschegt3 from '../CarPhotos/porschegt3.png';
import PorscheWhiteGas from '../CarPhotos/PorscheWhiteGas.png';
import UniversalNavbar from '../UniversalNavbar.js';
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
            <UniversalNavbar />
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