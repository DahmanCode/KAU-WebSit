import React from "react"
import Heading from "../common/heading/Heading"
import "./Home.css"
import { homeAbout } from "../../data"
import img from "../../images/hcard.jpg"

const Hcard = () => {
  return (
    <>
      <section className='Hcard'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={img} alt="" />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Lorem ipsum dolor sit amet' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hcard