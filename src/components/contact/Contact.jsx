import React from 'react'
import './contact.css'

function contact() {
  return (
    <div>
      <section className="contact">
        <div className="form-container">
          <h1>Send a message to us!</h1>
          <form>
            <input type="text" placeholder='Name'/>
            <input type="gmail" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea type="text" placeholder='Message' rows="4"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default contact