import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './components/Pages/Homepage';
import { apiCall } from './actions/fields.action'
import './styles/main.scss'
/* --------------------------------------------- */
const App = () => {
  const dispatch = useDispatch()
  /* --------------------------------------------- */
  useEffect(() => {
    dispatch(apiCall())
  }, [dispatch])
  /* --------------------------------------------- */
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}
/* --------------------------------------------- */
export default App;
