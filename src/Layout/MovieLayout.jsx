import React from 'react'
import MovieNavbarComponent from '../Components/Navbar/MovieNavbarComponent'
import Footer from './Footer'

const MovieLayout = (Component) => ({ ...props })=> {
  
  
  
  return (
    <>
    <div>
        <MovieNavbarComponent />
        <Component {...props}/>
        <Footer/>
    </div>
    </>
  )
}

export default MovieLayout