import React from 'react'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
import Footer from './Footer'

const DefaultLayout = (Component) => ({ ...props }) => {
  return (
    <>
    <div>
        <NavbarComponent />
        <Component {...props}/>
        <Footer/>
    </div>
    </>
  )
}

export default DefaultLayout