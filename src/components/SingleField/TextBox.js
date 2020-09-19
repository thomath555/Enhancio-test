import React, { useState } from 'react'
/* --------------------------------------------- */
import './single-field.scss'
import ToggleButton from './ToggleButton'
import styled from 'styled-components'
/* --------------------------------------------- */
const TextBox = ({ fieldName, mandatory,removeItemHandler,isRecycleBin,  isStandardField, index }) => {
    /* --------------------------------------------- */
    const [inputValue, updateInputValue] = useState('') 
    /* --------------------------------------------- */
    const onChangeHandler = (e) => {
        updateInputValue(e.target.value)
    }
    /* --------------------------------------------- */
    const onCloseButtonHandler = (index) => {
        removeItemHandler(index, isRecycleBin)
    }
    /* --------------------------------------------- */
    return (<SingleItem {...{ inputValue }} className="single-item single-item---textbox">
        <div className='single-item___header'>
            <div className='single-item___header-close' onClick={() => onCloseButtonHandler(index)}>
                <img alt='close-btn' src='./icons/close.png' />
            </div>
            <p className='single-item___header-counter'>{index < 9 ? `0${index + 1}` : index + 1}</p>
            <ToggleButton {...{ index, mandatory, isStandardField }} />
        </div>
        <div className='single-item___input'>
            <input type='text' onChange={onChangeHandler} value={inputValue} />
            <p className="single-item___placeholder">{fieldName}</p>
        </div>
    </SingleItem>
    )
}

const SingleItem = styled.div`
${({ inputValue }) => {
        if (inputValue) {
            return `
       input {
            border-bottom: 2px solid #5ebe89;
       }

       .single-item___placeholder {
           display:none;
       }

      `
        }
    }}
`

export default TextBox