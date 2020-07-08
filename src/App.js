import React from "react";
import "./App.css";
import EventLine from "./components/EventLine";
import GlobeDiv from "./components/GlobeDiv";
import Background from './background.png'

class App extends React.Component {
  render() {
    const style = {
      background: `url(${Background})`
    }

    return (
      <div className="main-container" style={style}>
        <EventLine />
      </div>
    );
  }
}

export default App;
