import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";

import "../App.css";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import { client } from "../client";

class HomePage extends React.Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        this.setState({
          photos: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <HeroSection />
        <Cards cards={this.state.photos} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
