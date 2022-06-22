import React, { useState } from 'react'
import './BMW.css';
import CloseIcon from '@mui/icons-material/Close';
import BMWm8MatteSilver from '../CarPhotos/BMWm8MatteSilver.png'
import BMW8serieswhite from '../CarPhotos/BMW8serieswhite.png'
import BmwM8 from '../CarPhotos/BmwM8.png'
import UniversalNavbar from '../UniversalNavbar';

const BMW = () => {

    let BmwData = [
        {
            id: 1,
            imgSrc: BMWm8MatteSilver
        },
        {
            id: 2,
            imgSrc: BMW8serieswhite
        },
        {
            id: 3,
            imgSrc: BmwM8
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
            <UniversalNavbar />
            <div className={model ? 'model open' : 'model'} >
                <img src={TempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery' >
                {BmwData.map((item, index) => {
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

export default BMW