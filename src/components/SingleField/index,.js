import React from 'react'
import SelectBox from './SelectBox'
/* --------------------------------------------- */
import './single-field.scss'
import TextBox from './TextBox'
/* --------------------------------------------- */
const SingleField = ({expectedValues = [], 
    fieldName,isStandardField,
     fieldType, mandatory, order,
      index, removeItemHandler, isRecycleBin}) => {
    /* --------------------------------------------- */
    console.log(fieldName)
    return (<>
    {fieldType === "TXT" && <TextBox {...{fieldName,isStandardField, isRecycleBin,removeItemHandler, mandatory, index }}/>}
    {fieldType === "SS" && <SelectBox {...{fieldName,isStandardField,expectedValues, isRecycleBin,removeItemHandler, mandatory, index }}/>}
    {fieldType === "MS" && <SelectBox {...{fieldName,isStandardField,expectedValues, isRecycleBin,removeItemHandler, mandatory, isMultipleSection: true, index }}/>}
    </>
    )
}
export default SingleField