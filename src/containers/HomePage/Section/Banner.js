import React, { Component } from "react";
import { connect } from "react-redux";
import "./Banner.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../../assets/images/Banner1.png";
import Banner2 from "../../../assets/images/Banner2.png";
import Banner3 from "../../../assets/images/Banner3.png";

class Banner extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    
      return (
        <div className="Header">
          <Slider {...settings}>
            <div>
              <img src={Banner1} />
            </div>
            <div>
              <img src={Banner2} />
            </div> 
            <div>
              <img src={Banner3} />
            </div>
        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
