"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      
      <body className={inter.className}>
      <NavBar></NavBar>

        
        {children}


<Footer></Footer>
      </body>
    </html>
  );
}
