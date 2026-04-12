import Brands from "./components/brands";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Works from "./components/works";

export default function  Page(){
  return(
    <>
      <Header/>
      <Hero/>
      <Works/>
      <Brands/>
      <Footer/>
    </>
  )
}