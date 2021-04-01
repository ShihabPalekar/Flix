import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

function App (){
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie-details" component={MovieDetails} />
      </Switch>
    </Router>
  )
}

export default App