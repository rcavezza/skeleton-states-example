import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Image from '../../../../../components/common/Image'

class EachVote extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      player: { },
    }
  }

  componentDidMount() {
    axios.get(`../players.json`)
      .then(res => {
        const players = res.data 

        setTimeout(() => {
          this.setState({ loading: false, player: players[this.props.playerId] })
        }, 4000)
      })
  }

  render() {
    if(this.state.loading) return <div />
    return (
      <div className="col-4">
        <div className="row">
          <div className="col-3">
            <span className="circle text-center"><h2>{this.props.rank}</h2></span>
          </div>
          <div className="col-3">
            <span>
              <Image 
                src={this.state.player.image} 
                className="each-vote-player-image" 
                alt="{this.state.player.firstName}'s avatar" 
              />
            </span>
          </div>          
          <div className="col-6">
            <p className="d-inline">{this.state.player.firstName} {this.state.player.lastName}</p>
            <p>{this.state.player.team}</p>
          </div>
        </div>
      </div>
    )    
  }
}

export default EachVote
