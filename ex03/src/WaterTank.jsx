import React from 'react';
import './WaterTank.css';

const WaterTank = (props) => {
    return (
        <div className="WaterTank">
            <div className="WaterLevel" style={{height: props.waterLevel + "%"}} ></div>
        </div>
    )
}

export default WaterTank;