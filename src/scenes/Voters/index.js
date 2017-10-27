import React, { Component } from 'react'
import axios from 'axios'
import VoterSummary from './scenes/Voter/VoterSummary.js'
import VotersLoading from './VotersLoading.js'
//import './index.css'

class Voters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      voters: []
    }
  }

  componentDidMount() {
    axios.get(`./voters.json`)
      .then(res => {
        const voters = res.data

        setTimeout(() => {
          console.log(voters)
          this.setState({ loading: false, voters: voters })
        }, 2000)
      })
  }

  render() {
    if(this.state.loading)
    {
      return (
        <div className="row">
          <VotersLoading />
        </div>
      )
    }
    else {
      return (
        <div className="row">
          {this.state.voters.map(voter =>
            <VoterSummary voter={voter} key={voter.id} />
          )}
        </div>
      )
    }
  }
}

export default Voters