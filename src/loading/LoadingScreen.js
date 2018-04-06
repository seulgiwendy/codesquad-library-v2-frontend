import React from 'react';
import { ScaleLoader } from 'react-spinners';
import './loading.css';

const LoadingScreen = (props) => {
    return (
        <div className="splash-main">
            <div className="splash-caption"><h4>Loading....</h4></div>
            <ScaleLoader className="splash-spinner"loading={true}/>
        </div>
    )
}

export default LoadingScreen;