import React, { Component } from 'react'
import axios from 'axios'

import EachVoteSkeleton from './EachVoteSkeleton'
import Image from '../../../../../components/common/Image'

class EachVote extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      player: { },
    }
  }

  randomSecondsOneThroughSix() {
    return (Math.floor(Math.random() * 6) + 1) * 1000
  }

  componentDidMount() {
    axios.get(`../players.json`)
      .then(res => {
        const players = res.data 
        const loadTime = this.randomSecondsOneThroughSix()

        setTimeout(() => {
          this.setState({ loading: false, player: players[this.props.playerId] })
        }, loadTime)
      })
  }

  render() {
    if(this.state.loading) return <EachVoteSkeleton rank={this.props.rank} />
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
