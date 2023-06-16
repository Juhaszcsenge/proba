import React from "react"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
              <div className='box flex'>
                <div className='img'>
                  <img src="/public/hatter.jpg" alt='' />
                </div>
                <div className='text'>
                  {/* <h1>{val.data}</h1>
                  <h3>{val.title}</h3> */}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Awrapper