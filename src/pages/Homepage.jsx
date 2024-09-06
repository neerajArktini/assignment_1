import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Description from "../components/Description"
import Aboutus from "../components/Aboutus"
import Services from "../components/Services"
import Gallery from "../components/Gallery"
import NewsLetter from "../components/NewsLetter"
import Pricing from "../components/Pricing"
import Maps from "../components/Maps"
import Testimonials from "../components/Testimonials"
import Faq from "../components/Faq"
import Blog from "../components/Blog"
import Footer from "../components/Footer"



const Homepage = () => {
    return (
        <div className='overflow-hidden'>
            <Hero />
            <Banner />
            <Description />
            <Aboutus />
            <Services />
            <Gallery />
            <NewsLetter />
            <Pricing />
            <Maps />
            <Testimonials />
            <Faq />
            <Blog />
            <Footer />
        </div>
    )
}

export default Homepage
