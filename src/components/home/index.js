import React, { Component , Fragment } from 'react';
import {Paper , Over ,Over2} from './style.js';
import About  from '../about/index';
import Blog from '../blog/index';
import Contact from '../contact/index';
import Portofolio from '../portofolio/index';
import Price from '../price/index';
import Service from '../services/index';
import Team from '../team/index';
import './style.css';

class Home extends Component {
  render(){
  return (
    <div>
    <Paper>
      <Over>  
      </Over>
      <Over2>
      <div className="container homecontainer">
      <h1 className='hometitle'>WE ARE CREATIVE AGENCY</h1>
      <p className='hometext'>Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.</p>
      <button className="btn btn-primary">Get Started!</button>
      <button className="btn btn-success">Learn More</button>
      </div>
      </Over2>
    </Paper>
    <About />
    <Portofolio />
    <Service />
    <Price />
    <Team />
    <Contact />
    </div>
  );
  }
}

export default Home;