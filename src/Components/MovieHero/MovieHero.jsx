import React , { useContext }from 'react';
import { MovieContext } from '../../context/MovieContext';
import MovieInfo from './MovieInfo';

const MovieHero = () => {

    const { movie , rentMovie , buyMovie } = useContext(MovieContext);

    const genres = movie.genres?.map(({name}) => name).join(" , ");
   

  return (
    <>
        <div>   
            {/* MOBILE & TAB SCREENS */}
            <div className="lg:hidden w-full">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Cover Poster" className="m-4 rounded" style={{width: "calc(100% - 2rem)"}}/>
            </div>

            <div className="flex flex-col gap-3 lg:hidden">
                <div className="flex flex-col-reverse gap-3 px-4 my-3">
                    <div className="text-black flex flex-col gap-2 md:px-4">
                        <h4>4K Rating</h4>
                        <h4>English , Hindi , Kannada , Tamil , Telugu</h4>
                        <h4>
                            {movie.runtime} min | {genres}
                        </h4>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                    <button onClick={rentMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
                    <button onClick={buyMovie}className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Buy ₹599</button>
                </div>
            </div>

            {/* LARGE SCREENS */}
            <div className="relative hidden w-full lg:block" style={{height : "30rem"}}>
                <div 
                    className="absolute z-10 w-full h-full" 
                    style={{backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.95) 2%, rgba(78,75,75,0.85) 31%, rgba(117,116,116,0.65) 46%, rgba(185,185,185,0.55) 63%, rgba(205,205,205,0.4) 76%, rgba(255,254,254,0.3) 90%, rgba(255,255,255,0.1) 100%)"}}
                />
                
    
                
                <div className="absolute z-30 left-20 top-8 flex item-center p-4 rounded-xl gap-10 bg-blue-100 bg-opacity-20 bg-clip-padding backdrop-blur-xs backdrop-grayscale-0 pr-24 shadow-md" >
                    <div className="w-64 h-96">
                        <img 
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                            alt=" Movie Poster"
                            className="w-full h-full rounded-lg" />
                    </div>

                    <div className='flex items-center'>
                        <MovieInfo movie={movie}/>
                    </div>
                </div>
                
                


                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                    alt="Backdrop Poster"
                    className="w-full h-full object-cover" 
                />


            </div>
        </div>
    </>
  )
}

export default MovieHero;