import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import './Home.css'
const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Header></Header>
     <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList></PropertyList>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties></FeaturedProperties>
        <MailList></MailList>
        <Footer></Footer>
     </div>
    </div>
  )
}

export default Home
