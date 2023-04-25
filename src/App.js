import React, { Component } from 'react';
import About  from './components/about/index'
import Blog from './components/blog/index'
import Contact from './components/contact/index'
import Home from './components/home/index'
import Nav from './components/navbar/index'
import Portofolio from './components/portofolio/index'
import Price from './components/price/index'
import Service from './components/services/index'
import Team from './components/team/index'
import { BrowserRouter , Route}  from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portofolio" component={Portofolio} />
      <Route path="/services" component={Service} />
      <Route path="/price" component={Price} />
      <Route path="/team" component={Team} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
