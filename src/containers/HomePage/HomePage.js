import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Banner from "./Section/Banner";
import Search from "./Section/Search";
import Container from "./Section/Container";
import Directory from "./Section/Directory";
import Footter from "./Section/Footter";
import MedicineFe from "./Section/MedicineFe";
import Products from "./Section/Products";
import Foorerfe from "./Foorerfe";
import Map from "./Section/SocialPlugin/Map";
class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Search />
        <Container />

        <Directory />
        <MedicineFe />
        {/* <Products/> */}
        <Footter />
        <Map />
        <Foorerfe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
