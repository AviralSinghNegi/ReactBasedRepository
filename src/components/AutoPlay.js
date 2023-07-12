import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: '100px', width: 'auto'}}/>
            {/* <h3>1</h3> */}
          </div>
          <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: '100px', width: 'auto'}}/>
            {/* <h3>2</h3> */}
          </div>
          <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: '100px', width: 'auto'}}/>
            {/* <h3>3</h3> */}
          </div>
          <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: '100px', width: 'auto'}}/>
            {/* <h3>4</h3> */}
          </div>
          <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: '100px', width: 'auto'}}/>
            {/* <h3>5</h3> */}
          </div>
          <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: '100px', width: 'auto'}}/>
            {/* <h3>6</h3> */}
          </div>
        </Slider>
      </div>
    );
  }
}