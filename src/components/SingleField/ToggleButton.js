import React, { useState, useEffect } from 'react'
/* --------------------------------------------- */
import './toggle-btn.scss'
/* --------------------------------------------- */
const ToggleButton = ({ index, mandatory, isRecycleBin }) => {
    /* --------------------------------------------- */
    const [input, updateInput] = useState(true)
    /* --------------------------------------------- */
    useEffect(() => {
        if (mandatory === "Y") updateInput(true)
        else updateInput(false)
    }, [mandatory])
    /* --------------------------------------------- */
    return (<div className="toggle-btn">
        <input className="tgl tgl-flat" id={`toggleBtn-${!isRecycleBin ? `std-${index}` : `${index}`}`} checked={input} onChange={() => updateInput(!input) } type="checkbox" />
        <label className="tgl-btn" htmlFor={`toggleBtn-${!isRecycleBin ? `std-${index}` : `${index}`}`}></label>
    </div>
    )
}
export default ToggleButton