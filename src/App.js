import React from 'react';
import './App.css';
import HideText from './components/HideText';

class App extends React.Component{
  render(){
    return(
      <div>
        <HideText text="Hello World!"/>
      </div>
    )
  }
}

export default App;
