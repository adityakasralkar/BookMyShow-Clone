import React from 'react'
import NavbarComponent from '../Components/Navbar/NavbarComponent'

const DefaultLayout = (Component) => ({ ...props }) => {
  return (
    <>
    <div>
        <NavbarComponent />
        <Component {...props}/>
        <div>Footer</div>
    </div>
    </>
  )
}

export default DefaultLayout