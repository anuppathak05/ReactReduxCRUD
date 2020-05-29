import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    lati: null,
    errorMessage: "",
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lati: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lati) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lati) {
      return <SeasonDisplay lat={this.state.lati} />;
    }
    return <Spinner message="Please accept location request..." />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
