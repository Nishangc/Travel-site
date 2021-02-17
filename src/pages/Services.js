import React from "react";
import "../App.css";
import { client } from "../client";
import Photos from "../components/Photos/Photos";

class Services extends React.Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          photos: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Photos cards={this.state.photos} />
      </>
    );
  }
}

export default Services;
