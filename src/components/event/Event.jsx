import React from 'react'
import './Event.css'
import Previous from './previous/Previous'

function Event() {
  return (
    <>
      {/* <Previous/> */}
      <section className="event">
        <h1>University Events</h1>
        <div className="center">
          <div className="previous">
            <a href="./Previous">Events Previous</a>
          </div>
          <div className="upcoming ">
            <a href="#">Events Upcoming</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Event
