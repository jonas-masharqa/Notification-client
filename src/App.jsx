import React from 'react'
import LandingPage from './Components/LandingPage'
import WriteMessage from './Components/WriteMessage'
import ViewMessage from './Components/ViewMessage'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/write" component={WriteMessage} />
      <Route exact path="/view" component={ViewMessage} />
    </>
  )
}

export default App