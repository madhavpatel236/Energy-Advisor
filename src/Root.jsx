import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import More from './components/KnowMore/Knowmore'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
