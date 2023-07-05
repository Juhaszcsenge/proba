import React from "react"
import { price } from "../../Component/Data/Data"
import Heading from "../../Component/Heading"
import "./price.css"

const PriceCard = () => {
  return (
    <>
    <section className='price padding'>
    <div className='container'>
    <h1 style={{color: "white", padding: "20px"}}>Árlista</h1>
      <div className='content flex mtop' >
        {price.map((item, index) => (
          <div className='box shadow' key={index} style={{margin: "10px"}}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { text } = val
                return (
                  <li>
                    <label
                    >
                      {/* {icon} */}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      </div>
      </section>
    </>
  )
}

export default PriceCard