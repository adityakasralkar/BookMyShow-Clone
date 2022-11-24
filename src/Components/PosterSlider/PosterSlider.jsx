import React from 'react'
import Slider from "react-slick";
import Poster from "../Poster/PosterComponent";

const PosterSlider = (props) => {

  const {posters , title , subtitle , isDark , config} = props;

  const settings= {
    infinite:false,
    speed:500,
    slidesToShow: 5,
    slidesToScroll:4,
    initialSlide:0,
    responsive:[
      {
        breakpoint:1024,
        settings : {
          slidesToShow:5,
          slidesToScroll:4,
        }
      },
      {
        breakpoint:600,
        settings : {
          slidesToShow:4,
          slidesToScroll:3,
          initialSlide:3,
        }
      },

      {
        breakpoint:480,
        settings : {
          slidesToShow:3,
          slidesToScroll:1,
          initialSlide: 0,
        }
      }
    ]
    
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
        <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>{subtitle}</p>
      </div>

     {config && (
       <Slider {...config}>
       {posters.map((each , index) => (
         <Poster {...each} isDark={isDark} key={index}/>
       ))}
     </Slider>
     )}

     {!config && (
       <Slider {...settings}>
       {posters.map((each , index) => (
         <Poster {...each} isDark={isDark} key={index}/>
       ))}
     </Slider>
     )}
    </>
  )
}

export default PosterSlider