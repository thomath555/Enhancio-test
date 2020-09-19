import React, { useState } from 'react'
/* --------------------------------------------- */
import './single-field.scss'
import ToggleButton from './ToggleButton'
import styled from 'styled-components'
/* --------------------------------------------- */
const SelectBox = ({ fieldName, mandatory, removeItemHandler, isRecycleBin,isMultipleSection, expectedValues = [], index }) => {
    /* --------------------------------------------- */
    const [inputValue, updateInputValue] = useState('')
    const [mutiSelecionInputValue, updateMutiSelecionInputValue] = useState([])
    const [isListOpen, updateIsListOpen] = useState(false)
    /* --------------------------------------------- */
    const onCloseButtonHandler = (index) => {
        removeItemHandler(index, isRecycleBin)
    }
    /* --------------------------------------------- */
    const onClickHandler = () => {
        if(isListOpen) updateIsListOpen(false)
        else updateIsListOpen(true)
    }
    /* --------------------------------------------- */
    const listOnClickHandler = (item) => {
        if(isMultipleSection) {
            const isPresent = mutiSelecionInputValue.includes(item)
            if(!isPresent) {
                mutiSelecionInputValue.push(item)
                updateMutiSelecionInputValue(mutiSelecionInputValue)
            }
        }
         else updateInputValue(item)
        
        updateIsListOpen(false)
    }
    /* --------------------------------------------- */
    return (<SingleItem {...{ inputValue, isListOpen, mutiSelecionInputValue }} className="single-item single-item---textbox">
        <div className='single-item___header'>
            <div className='single-item___header-close' onClick={() => onCloseButtonHandler(index)}>
                <img alt='close-btn' src='./icons/close.png' />
            </div>
            <p className='single-item___header-counter'>{index < 9 ? `0${index + 1}` : index + 1}</p>
            <ToggleButton {...{ index, mandatory, isRecycleBin }} />
        </div>
        <div className='single-item___input'>
            <div className='select-box-value'>{isMultipleSection ? mutiSelecionInputValue.toString() :inputValue}</div>
            <p className="single-item___placeholder">{fieldName}</p>
            <img onClick={onClickHandler} src='./icons/list.png' alt='list img' />
           {isListOpen && <ul className='selectBox-optons-list'>
                {
                    expectedValues.map((item) => {
                        return <li className={!isMultipleSection && item === inputValue ? 'active' : null } onClick={() => listOnClickHandler(item)}>
                            <img src='./icons/next.png' alt='next img'/>
                            {item}
                            </li>
                    })
                }
            </ul>}
        </div>
    </SingleItem>
    )
}

const SingleItem = styled.div`
${({ inputValue, isListOpen, mutiSelecionInputValue }) => {
        if (inputValue || isListOpen || mutiSelecionInputValue.length) {
            return `
       .select-box-value {
            border-bottom: 2px solid #5ebe89;
       }

      `
        }
    }}
    ${({ inputValue, mutiSelecionInputValue }) => {
        if (inputValue || mutiSelecionInputValue.length) {
            return `
        .single-item___placeholder {
           display:none;
       }

      `
        }
    }}
`

export default SelectBox