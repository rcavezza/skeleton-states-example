import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import PlayerSquare from './scenes/Player/PlayerSquare.js'
import PlayersLoading from './PlayersLoading.js'
//import './index.css'

class Players extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      players: []
    }
  }

  componentDidMount() {
    axios.get(`./players.json`)
      .then(res => {
        const players = res.data

        setTimeout(() => {
          this.setState({ loading: false, players: players })
        }, 4000)
      })
  }

  render() {
    if(this.state.loading) return ReactDOM.createPortal(<PlayersLoading />,document.body)
    return (
      <div className="row">
        {Object.keys(this.state.players).map( (playerId, key) => 
          <PlayerSquare player={this.state.players[playerId]} key={key} />
        )}
      </div>
    )
  }
}

export default Players