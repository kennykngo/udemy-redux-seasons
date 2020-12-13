import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // if we know that the value of the property of the state's object is a number
      // we initialize it as 'null'
      lat: null,
    };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      // success call back
      (pos) => console.log(pos),
      //failure callback
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
