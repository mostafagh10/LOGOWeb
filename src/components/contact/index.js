import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faPhone , faEnvelope , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
library.add(faPhone , faEnvelope , faMapMarkerAlt);

class Contact extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      this.setState({
        x : res.data.contact
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-md-4 col-sm-12" key={x.id}>
            <div className="card" id="contact1">
              <FontAwesomeIcon icon={x.icon} id="contact5"/><br />
                <h1>{x.type}</h1><br />
                <p className="contactdetails">{x.details}</p>
            </div>
          </div>
      )
    })
  return (
    <div className="contactone">
    <div className="container">
    <h1>Get In Touch</h1>
    <hr className='contacthr' />
    <br />
        <div className="row">
      {list}
      <div className="col-md-6">
        <br />
        <input type="text" className="contacttwo" placeholder="Name" />
      </div>
      <div className="col-md-6">
        <br />
        <input type="text" className="contactthree" placeholder="Email" />
      </div>
      <div className="col-md-12">
      <br />
        <input type="text" className="contactfour" placeholder="Subject" />
      </div>
      <div className="col-md-12">
      <br />
        <input type="text" className="contactfive" placeholder="message" /><br /><br />
        <button className="btn btn-primary" id="contactbut">Send Message</button>
      </div>
      </div>
      </div>
      </div>
  );
  }
}

export default Contact;