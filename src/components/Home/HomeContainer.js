import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';



class HomeContainer extends React.Component {
  render(){
    return(
      <Home />
    )
  }
};

export default connect()(Home);