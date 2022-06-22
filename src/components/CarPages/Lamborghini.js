import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import LamborghiniAventadorBlue from '../CarPhotos/LamborghiniAventadorBlue.png';
import LamborghiniDiabloBlue from '../CarPhotos/LamborghiniDiabloBlue.png';
import LamborghiniBlueDiabloRear from '../CarPhotos/LamborghiniBlueDiabloRear.png';
import LamborghiniHuracanOrange from '../CarPhotos/LamborghiniHuracanOrange.png';
import LamborghiniUrusgarage from '../CarPhotos/LamborghiniUrusgarage.png';
import LamborghiniUrusyellow from '../CarPhotos/LamborghiniUrusyellow.png';
import UniversalNavbar from '../UniversalNavbar.js';

const Lamborghini = () => {

    let LData = [
        {
            id: 1,
            imgSrc: LamborghiniAventadorBlue
        },
        {
            id: 2,
            imgSrc: LamborghiniDiabloBlue
        },
        {
            id: 3,
            imgSrc: LamborghiniBlueDiabloRear
        },
        {
            id: 4,
            imgSrc: LamborghiniHuracanOrange
        },
        {
            id: 5,
            imgSrc: LamborghiniUrusgarage
        },
        {
            id: 6,
            imgSrc: LamborghiniUrusyellow
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
                {LData.map((item, index) => {
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

export default Lamborghini