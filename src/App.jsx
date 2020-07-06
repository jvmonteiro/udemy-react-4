import React from "react";
import SeasonDisplay from "./SeasonDisplay.jsx";
import Spinner from "./Spinner.jsx";

// export default function App() {
// window.navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
// return( <div className="App">
//    <h1>Latitude: {} </h1>

//    </div>);
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className="App">Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      // return <div className="App">Latitude: {this.state.lat}</div>;
    }
    return <Spinner message="Please accept the location request" />;
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
