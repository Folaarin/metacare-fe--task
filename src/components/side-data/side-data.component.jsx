import React from "react";
import './side-data.styles.css';



const SideData = ({title, value}) => {
    return (
        <div className="custom-side-box">
            <div className="side-title my-3">{title}</div>
            <div className="side-value">{value}</div>
        </div>
    )
}

export default SideData