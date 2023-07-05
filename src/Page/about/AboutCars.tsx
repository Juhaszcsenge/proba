import React from "react"
import Heading from "../../Component/Heading"
import "./about.css"
import Awrapper from "./Awrapper"


  const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='/mazanyi-judit.jpg' alt='' style={{margin: "60px"}}/>
          </div>
          <div className='right row'>
            <Heading subtitle='Rólam' title='Tanulmányaim' />
            <div className='items'>
              <div className='item flexSB'>
                <div className='text'>
                  <h2>Rólam</h2>
                  <p>Az ELTE Bölcsészkarán végeztem pszichológusként 1997-ben,
                    majd 2008-ban szereztem meg a tanácsadó szakpszichológusi végzettséget krízis tanácsadás szakirányon.
                    Főállásban pályaalkalmassági szakterületen dolgozom, itt szupervízori és szakértői feladatokat is ellátok.
                    Emellett tréning csoportokat vezetek és egyéni tanácsadást tartok.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard