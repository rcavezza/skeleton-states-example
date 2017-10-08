import React, { Component } from 'react';
import axios from 'axios';
import Voter from '../Voter';
import VotersLoading from './votersLoading.js';
//import './index.css';

class Voters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      voters: []
    };
  }

  componentDidMount() {
    axios.get(`./voters.json`)
      .then(res => {
        const voters = res.data;

        setTimeout(() => {
          console.log(voters);
          this.setState({ loading: false, voters: voters });
        }, 2000);
      });
  }

  render() {
    if(this.state.loading)
    {
      return (
        <div className="row">
          <VotersLoading />
        </div>
      );
    }
    else {
      return (
        <div className="row">
          {this.state.voters.map(voter =>
            <Voter voter={voter} />
          )}
        </div>
      );      
    }
  }
}

export default Voters;