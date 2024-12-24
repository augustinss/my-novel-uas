import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewNovels from '../components/NewNovels'
import Banner from '../components/Banner'
import TrendingNovels from '../components/TrendingNovels'
import Blog from '../components/blog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero />
    <Features />
    <NewNovels />
    <Banner />
    <TrendingNovels />
    <Blog />
    <Footer/>
    </>
  )
}

export default Home