import React from 'react'
import MovieNavbarComponent from '../Components/Navbar/MovieNavbarComponent'

const MovieLayout = (Component) => ({ ...props })=> {
  
  
  
  return (
    <>
    <div>
        <MovieNavbarComponent />
        <Component {...props}/>
        <div>Footer</div>
    </div>
    </>
  )
}

export default MovieLayout