import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
/* --------------------------------------------- */
import TitleBox from './TitleBox'
import FieldWrapper from './FieldWrapper'
/* --------------------------------------------- */
import './style.scss'
/* --------------------------------------------- */
const HomePage = () => {
    /* --------------------------------------------- */
    const [stdFields, updateStdFields] = useState([])
    const [recyleFields, updateRecyleFields] = useState([])
    const stdFieldsRef = useRef(stdFields)
    const recyleFieldsRef = useRef(recyleFields)
    /* --------------------------------------------- */
    const { allFields } = useSelector(store => store.fieldReducer)
    /* --------------------------------------------- */
    useEffect(() => {
        stdFieldsRef.current = stdFields
    }, [stdFields])
    /* --------------------------------------------- */
    useEffect(() => {
        recyleFieldsRef.current = recyleFields
    }, [recyleFields])
    /* --------------------------------------------- */
    useEffect(() => {
        updateStdFields(allFields)
    }, [allFields])
    /* --------------------------------------------- */
    const removeItemHandler = (index, isRecycleBin) => {
        const dataSet = [...stdFieldsRef.current]
        const item = dataSet[index]
        const recyleDataSet = [...recyleFieldsRef.current]
        if (dataSet.length && !isRecycleBin) {
            dataSet.splice(index, 1)
            updateStdFields(dataSet)
            recyleDataSet.unshift(item)
            updateRecyleFields(recyleDataSet)
        } else if(isRecycleBin && recyleDataSet.length) {
            const recylebinItem = recyleDataSet[index]
            recyleDataSet.splice(index, 1)
            updateRecyleFields(recyleDataSet)
            dataSet.push(recylebinItem)
            updateStdFields(dataSet)
        }
    }
    /* --------------------------------------------- */
    return (<>
        <TitleBox />
        {stdFields.length ? <FieldWrapper {...{ fields: stdFields, removeItemHandler }}/> : <p className='error-msg'>Nothing to Show</p> }
        <div className='btn-wrapper'>
        <button>Save</button>
        </div>
        {recyleFields.length ? <FieldWrapper {...{ fields: recyleFields, removeItemHandler, isRecycleBin:true }}/> : null }
    </>
    )
}
export default HomePage