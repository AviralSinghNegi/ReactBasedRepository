import React, { Component } from "react";
import Slider from "react-slick";


export default class SlickSlider extends Component {

  render() {
    const settings = {
      focusOnSelect: true,
      autoplay: 'true',
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerPadding: "0px"
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0px"
            }
          }
      ]
    };

    return (
      <div style={{width: '80%', margin: 'auto'}} className="sliderDiv">
        <h2 style={{textAlign: 'center'}}>Center Mode</h2>
        <Slider {...settings}>
          <div className="slick-slide">
            {/* <h3>1</h3> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: 'auto', width: '100%'}}/>
          </div>
          <div>
            {/* <h3>2</h3> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: 'auto', width: '100%'}}/>
          </div>
          <div>
            {/* <h3>3</h3> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: 'auto', width: '100%'}}/>
          </div>
          <div>
            {/* <h3>4</h3> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: 'auto', width: '100%'}}/>
          </div>
          <div>
            {/* <h3>5</h3> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: 'auto', width: '100%'}}/>
          </div>
          <div>
            {/* <h3>6</h3> */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Logo" style={{height: 'auto', width: '100%'}}/>
          </div>
        </Slider>
        </div>

      
    );
  }
}