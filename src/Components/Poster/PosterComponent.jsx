import React from 'react';
import { Link } from 'react-router-dom';


const MoviePoster =(props) => {
  return(
    <>
    <Link to={`/movie/${props.id}`} >
          <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
              
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
                 alt="Poster"
                 className="h-full w-full rounded-md" />
           
              
              
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
              {props.title}
            </h3>
            {/* <p className={`text-sm font-mono ${props.isDark ? "text-white" : "text-gray-600"}`}>{props.release_date}</p> */}

          </div>
        
        </Link>
    </>
  );
};

const PlayPoster = (props) => {
      return (
        <>
        <a href="https://in.bookmyshow.com/events/king-india-tour-ahemdabad/ET00341297" target="_blank" rel="noreferrer">
          <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
            <img src={props.src} 
                   alt="Poster"
                   className="h-full w-full rounded-md" />
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
              {props.title}
            </h3>

            <h3 className={`text-sm font-semibold ${props.isDark ? "text-white" : "text-gray-600"}`}>
              {props.subtitle}
            </h3>
            

          </div>
          </a>
        </>
      )
}



const PosterComponent = (props) => {
  if(props.isPlay){
      return <PlayPoster {...props}/>;
  }
  return <MoviePoster {...props}/>;
}

export default PosterComponent;