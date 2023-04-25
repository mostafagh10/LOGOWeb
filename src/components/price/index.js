import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class Price extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      console.log(res.data.price)
      this.setState({
        x : res.data.price
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-md-4">
            <div className="card" id="pricebigover">
              <div className="priceover">     
              </div>
              <div className="priceover2">
                <h4>{x.plan} plan</h4><br />
                <h3 className="pricetwo"><span className='pricespan'>{x.price}$ </span><br />/ Month</h3><br />
                <p>1GB Disk Space<br /><br />100 Email Account<br /> <br />24/24 Support</p><br />
                <button className="pricethree">Purchase Now</button>
              </div>
            </div>
          </div>
      )
    })
  return (
    <div className="priceone">
    <div className="container">
    <h1>Pricing Table</h1>
    <hr className='pricehr' />
    <br />
        <div className="row">
      {list}
      </div>
      </div>
      </div>
  );
  }
}

export default Price;