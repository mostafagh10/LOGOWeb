import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class Team extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      this.setState({
        x : res.data.team
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-md-4 col-sm-12">
            <div className="card teamcard" id="one">
                <img className="card-img-top" src={x.image} /><br />
                <p className="card-text">JOHN DOE</p>
                <h2>web designer</h2>
            </div>
          </div>
      )
    })
  return (
    <div className="teamone">
    <div className="container">
    <h1>Our Team</h1>
    <hr className='teamhr' />
    <br />
        <div className="row">
      {list}
      </div>
      </div>
      </div>
  );
  }
}

export default Team;