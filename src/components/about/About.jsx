import React from 'react'
import './About.css'
import imgRight from "../../images/history.jpg"
import video from "../../images/KAU Campuses.mp4"

function About() {
  return (
    <div>
      <section className="other about">
        <div className="heading">
          <h1>
            Online postgraduate study at Sussex. More knowledge, more change.
          </h1>
        </div>
        <div className="container flexSB history">
          <h2>History of University</h2>
          <div className="content row">
            <p>
              King Abdul Aziz University bears the name of the founder of the
              Kingdom of Saudi Arabia, King Abdul Aziz. The establishment of
              this university was in 1387 AH / 1967 AD as a private university,
              with the aim of spreading higher education in the western region
              of the Kingdom of Saudi Arabia. With the efforts of the loyal
              people of this country, the dream turned into a reality and the
              idea came into existence as the members of the Preparatory
              Committee had a meeting with King Faisal bin Abdul Aziz, and he,
              may God have mercy on him, expressed all support and support for
              the idea of the project, and formed the founding committee of the
              university headed by the late King Faisal and His Excellency the
              Minister of Education at the time Hassan bin Abdullah Al Sheikh.
            </p>
          </div>
          <div className="right row">
            <img src={imgRight} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
