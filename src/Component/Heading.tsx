import React from "react"

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <div className='heading' style={{color: "white"}}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading