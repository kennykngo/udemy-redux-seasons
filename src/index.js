import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // never want to do a direct assignment to state object
    // THIS IS THE ONLY TIME WE do a direct assignment to this.state
    this.state = {
      // if we know that the value of the property of the state's object is a number
      // we initialize lat to the value of 'null'
      lat: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        // STATE CAN ONLY BE UPDATED W/ setState function!
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  // render method gets called all of the time
  render() {
    // handles the error message section
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    // handles the latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat}</div>;
    }

    return <div>Loading! </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
