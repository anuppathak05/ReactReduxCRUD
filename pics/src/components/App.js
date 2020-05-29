import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "/search/photos?client_id=tBmDv18i8siQ5W7BHM_SvDPjK2UHQvaX-Xz14CuGuHA",
      {
        params: { query: term },
      }
    );
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found :{this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
