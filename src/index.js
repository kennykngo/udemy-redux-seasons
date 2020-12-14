import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // render method gets called all of the time
  render() {
    // handles the error message section
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    // handles the latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading! </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
