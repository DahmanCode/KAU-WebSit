import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO UNIVERSITY' title='Best University In The Arab World' />
            <p>King Abdulaziz University maintained its Arab leadership in international rankings, as it ranked first in the Arab world and ranked 101-150 among the best universities in the world.</p>
            <div className='button'>
              <button className='primary-btn' >
                <a href="./Contact">
                Share Your Ideas And Inventions With Us 
                <i className='fa fa-long-arrow-alt-right'></i>
                </a>
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