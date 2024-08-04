"use client"
import  AOS  from "aos"
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "./components/hero/Hero";
import  Contents  from  "../app/components/Contents/Contents"
import BestTaxis from "./components/BestTexis/BestTaxis";
import AuthContext from "./context/authContext";
import { getData } from "./service/service";
import AboutUs from "./components/AboutUs/AboutUs";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Head from "next/head";
export default function Home() {

  let  [dataBestTaxi   ,  setDataBestTaxi   ]    =  useState([])

useEffect(()  =>  {
  AOS.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-sine',
    delay: 300,
  });
  AOS.refresh();



  getData("http://localhost:7500/bestTaxis").then (res  =>  {
    setDataBestTaxi(res)

  })






  
}  , [])

  return (

    <>

    <AuthContext.Provider    value={dataBestTaxi} >


    <section     className="overflow-x-hidden" >
<Hero></Hero>
  <Contents></Contents>
  <BestTaxis></BestTaxis>
  <AboutUs></AboutUs>
  <AppStore></AppStore>
  <Testimonial></Testimonial>

    </section>
    </AuthContext.Provider>
    </>
  )
}
