import React from 'react'
import HeaderNav from '../navigations/HeaderNav'
import Footer from '../navigations/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <HeaderNav />
        {children}
        <Footer />
    </div>
  )
}

export default Layout