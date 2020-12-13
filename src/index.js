import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
