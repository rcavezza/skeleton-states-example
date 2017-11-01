import React, { Component } from 'react'
import axios from 'axios'
import Aux from 'react-aux'

import OrderedList from '../../../../components/common/OrderedList'
import PlayersLoading from '../../PlayersLoading'

class PlayerProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerId: props.match.params.id,
      loading: true,
      player: { mvpVotes: [] }
    }

    this.findPlayer = this.findPlayer.bind(this)
    this.fullName = this.fullName.bind(this)
  }

  findPlayer(player) {
    return player.id === this.state.playerId
  }

  componentDidMount() {
    axios.get(`../players.json`)
      .then(res => {
        const players = res.data
  
        setTimeout(() => {
          this.setState({ loading: false, player: players[this.state.playerId] })
        }, 2000)
      })
  }


  fullName() {
    return <h2>{this.state.player.firstName} {this.state.player.lastName}</h2>
  }

  render() {
    if(this.state.loading) {
      return (
        <Aux>
          <PlayersLoading />
        </Aux>
      )
    } else {
      return (
        <div className="row">
          <div className="col-lg-6">
            {this.fullName()}
            {this.state.player.company}
            <h4>MVP Votes</h4>
            <OrderedList values={this.state.player.mvpVotes} />
            <img src={this.state.player.image} alt="{this.state.player.firstName}'s avatar" />
          </div>
        </div>         
      )        
    }
  }
}

 // PlayerProfile.propTypes = {
 //   match.params.id: PropTypes.string.isRequired
 // }

export default PlayerProfile
     
