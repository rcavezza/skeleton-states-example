import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './skeleton.css'
import registerServiceWorker from './registerServiceWorker'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Aux from 'react-aux'

import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Players from './scenes/Players'
import PlayerProfile from './scenes/Players/scenes/Player'
import Voters from './scenes/Voters'
import VoterProfile from './scenes/Voters/scenes/Voter/VoterProfile'

ReactDOM.render(
  <Router>
    <Aux>
      <Navbar />
      <div className="container-fluid" id="main-container">
        <Header />
          <Switch>
            <Route exact path='/' component={Voters}/>
            <Route exact path='/voters' component={Voters}/>
            <Route path='/voters/:id' component={VoterProfile}/>
            <Route exact path='/players' component={Players}/>
            <Route path='/players/:id' component={PlayerProfile}/>
          </Switch>
        <Footer />
      </div>
    </Aux>
  </Router>
  ,document.getElementById('root'))
registerServiceWorker()
