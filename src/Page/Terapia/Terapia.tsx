import Heading from "../../Component/Heading"
import React from "react"
import { terapia } from "../../Component/Data/Data"
import "./Terapia.css"


const Team = () => {
    return (
      <>
        <section className='team background'>
          <div className='container'>
            <h1 style={{color: "black", textAlign: "center", margin: "5px", padding: "30px"}}>
              Miben segíthetek?
            </h1>
            {/* <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /> */}
  
            <div className='content mtop grid3'>
              {terapia.map((item, index) => (
                <div className='box' key={index}>
                  <img src={item.cover} alt="" />
                  <div className='details'>
                      <h5>{item.name}</h5>
                    </div>
                    <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Team