import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class About extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      console.log(res.data.about)
      this.setState({
        x : res.data.about
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-md-4 col-sm-12">
            <div className="card aboutcard">
                <h1>{x.title}</h1>
                <p>{x.body}</p>
                <p className="abouttwo">READ MORE</p>
            </div>
          </div>
      )
    })
  return (
    <div className="aboutone">
    <div className="container">
    <h1>WELCOME TO WEBSITE</h1>
    <hr className='abouthr' />
    <br />
        <div className="row">
      {list}
      </div>
      </div>
      </div>
  );
  }
}

export default About;