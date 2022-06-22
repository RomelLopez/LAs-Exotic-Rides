import React, { useState } from 'react'
import mclaren1 from '../CarPhotos/mclaren1.png';
import McLarenBlack from '../CarPhotos/McLarenBlack.png';
import UniversalNavbar from '../UniversalNavbar';
import CloseIcon from '@mui/icons-material/Close';


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
            <UniversalNavbar />
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