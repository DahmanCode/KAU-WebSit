import React from 'react'
import eventImg from "../../../images/upcoming1.jpeg"
import "./../Event.css"

function Previous() {
  return (
    <section className="event">
      <div className="e-content">
          <div className="image">
            <img src={eventImg} />
          </div>
          <div className="desc">
            <div className="details">
              <h1>Event name: <br /> <b>Theatrical Competition</b></h1>
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <h3>Sunday 6 November <br /> from 10:00 until 13:00</h3>
              </span>
              <span>
                <i className="fa-solid fa-map-location-dot"></i>
                <h3>Theater of The Faculty of Computing and Information Technology</h3> 
              </span>
            </div>
            <h2>Interact with us</h2>
            <div className="post">
              <div>
                <h3>Comment</h3>
                <textarea rows="3" placeholder='Write a Comment'></textarea>
              </div>
              <div>
                <h3>Like</h3>
                <i class="fa-solid fa-heart"></i>
              </div>
              <div>
                <h3>Share</h3>
                <i class="fa-solid fa-share"></i>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Previous