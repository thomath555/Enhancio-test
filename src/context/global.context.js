import React, { createContext, useReducer } from 'react'
/* --------------------------------------------- */
const initialState = {
  standardFieds: [],
  recycleFields: [],
  dispatch: () => { },
}
/* --------------------------------------------- */
export const GlobalContext = createContext(initialState)
/* --------------------------------------------- */
const globalCOntextReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STD_FIELDS':
      return { ...state, standardFieds: action.value }
    case 'SET_RECYLE_FIELDS':
      return { ...state, recycleFields: action.value }
    default:
      return state
  }
}
/* --------------------------------------------- */
const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(globalCOntextReducer, initialState)
  /* --------------------------------------------- */
  return (
    <GlobalContext.Provider value={{
      ...state,
      dispatch
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
/* --------------------------------------------- */
export default GlobalProvider