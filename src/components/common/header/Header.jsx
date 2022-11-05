import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <a href="https://iam.kau.edu.sa/oamsso-bin/kaulogin-fed.pl?contextType=external&username=string&OverrideRetryLimit=0&password=secure_string&challenge_url=%2Foamsso-bin%2Fkaulogin-fed.pl&request_id=4817233657656313190&authn_try_count=0&locale=en_US&resource_url=%252Fuser%252Floginsso" target={"_blank"}><div className='start'>
            <div className='button'>EMAIL US</div>
          </div></a>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header