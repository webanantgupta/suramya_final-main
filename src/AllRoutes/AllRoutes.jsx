import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import AboutUs from '../Pages/AboutUs'
import ViewEvents from '../Components/HomeCo/ViewEvents'
import EventDetails from '../Components/HomeCo/EventDetails'

import Leaders from '../Components/HomeCo/Leaders'
import LeaderGrid from '../Components/HomeCo/LeaderGrid'
import ScrollTop from '../Common/ScrollTop'
import Contact from '../Components/HomeCo/Contact'
import Donate from '../Components/HomeCo/Donate'
import Gallery from '../Components/HomeCo/Gallery'
import OurImpact from '../Components/HomeCo/OurImpact'
import Impact from '../Pages/Impact'
import GalleryDetails from '../Components/HomeCo/GalleryDetails'

const AllRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <ScrollTop/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/viewevents' element={<ViewEvents/>}/>
                    <Route path="/event/:id"  element={<EventDetails/>}/>
                    <Route path='/event/:id' element={<EventDetails/>}/>
                    <Route path='/leadergrid' element={<LeaderGrid/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/donate' element={<Donate/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/gallery/:id' element={<GalleryDetails/>}/>
                    <Route path='/impact' element={<Impact/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
