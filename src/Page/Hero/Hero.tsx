import React from "react"
import Heading from "../../Component/Heading";
import "./Hero.css"
// import Cards from "../Fooldal";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='conatiner' style={{alignItems: "center", textAlign: "center" }}>
          <div className='row' style={{alignItems: "center", justifyContent: "center"}}>
            <Heading subtitle=''  title='Mazányi Judit Pszichológus' />
            <p className="valami" style={{alignItems: "center"}}>Önmagunk megismerése kaland, amely váratlan messzeségekbe és mélységekbe vezet. (C.G. Jung)</p>
            <div className='button'>
              <button className='primary-btn' style={{ color: "white"}}>
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero