import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import './index.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
