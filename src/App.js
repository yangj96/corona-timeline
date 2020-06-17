import React from "react";
import "./App.css";
import EventLine from "./components/EventLine";
import GlobeDiv from "./components/GlobeDiv";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <EventLine />
        <GlobeDiv />
      </div>
    );
  }
}

export default App;
