import React, { useState, useEffect } from 'react'
/* --------------------------------------------- */
import './toggle-btn.scss'
/* --------------------------------------------- */
const ToggleButton = ({ index, mandatory, isStandardField }) => {
    /* --------------------------------------------- */
    const [input, updateInput] = useState(true)
    /* --------------------------------------------- */
    useEffect(() => {
        if (mandatory === "Y") updateInput(true)
        else updateInput(false)
    }, [mandatory])
    /* --------------------------------------------- */
    return (<div className="toggle-btn">
        <input className="tgl tgl-flat" id={`toggleBtn-${isStandardField ? `std-${index}` : `${index}`}`} checked={input} onChange={() => updateInput(!input) } type="checkbox" />
        <label className="tgl-btn" htmlFor={`toggleBtn-${isStandardField ? `std-${index}` : `${index}`}`}></label>
    </div>
    )
}
export default ToggleButton