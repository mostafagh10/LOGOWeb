import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class Portofolio extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      console.log(res.data.works)
      this.setState({
        x : res.data.works
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-md-4 portfoliocard">
                <img src={x.image} height="90%" width="90%"/>
          </div>
      )
    })
  return (
    <div className="portfolioone">
    <div className="container">
    <h1>Featured Works</h1>
    <hr className='portfoliohr' size="20" />
    <br />
        <div className="row">
      {list}
      </div>
      </div>
      </div>
  );
  }
}

export default Portofolio;