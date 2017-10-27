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
          console.log(players)
          this.setState({ loading: false, players: players })
        }, 4000)
      })
  }

  render() {
    if(this.state.loading)
    {
      return ReactDOM.createPortal(
        <PlayersLoading />,
        document.body
      )        
    }
    else {
      return (
        <div className="row">
          {this.state.players.map(player =>
            <PlayerSquare player={player} key={player.id} />
          )}
        </div>
      )      
    }
  }
}

export default Players