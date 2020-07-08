import React from 'react';
import Sidebar from './component/Sidebar';
import Page from './component/Page';
//import Login from './component/Login';
import Fullscreen from "react-full-screen";

export default class App extends React.Component {

  state = {
    isFull: false,
  };
 
  goFull = () => {
    this.setState({ isFull: true });
  }

  render(){
    return (
      
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <div className="wrapper full-screenable-node">
              <div className="notifications-wrapper"></div>
              <Sidebar></Sidebar>
              <Page onClick={isFull => this.setState({isFull: !this.state.isFull})}></Page>
          </div>
        </Fullscreen>
    );
  }
}
