import React from 'react'
import "./News.css"

function News() {
  return (
    <section className="news">
      <div className="news-title">
        <i class="fa-solid fa-newspaper"></i>
        <h1>Latest News :</h1>
      </div>
      <div className="latest-news">
        <h1>Minister of Innovative Development of Uzbekistan visits King Abdulaziz University to discuss Cooperation</h1>
        <p>
        On behalf of His Excellency, Professor Abdulrahman Al-Youbi, President of King Abdulaziz University, Professor Tawfiq Al-Khayal, Vice President for Business and Knowledge Creativity, received on Thursday 08/18/2022 AD, His Excellency, Professor Ibrokhim Abdurakhmonov, Minister of Innovative Development of Republic of Uzbekistan, and Mr. Otabek Fayazov, Director of the Department of International Cooperation in the Ministry of Innovation. The Uzbek delegation was accompanied by Dr. Munira Al-Aboudi, Director of the Education Sector at Saudi Ministry of Investment, and Ms. Anfal Al-Jibreen. The meeting and the schedule of the visit were attended by Professor Amin Noaman, Vice President for Graduate Studies and Scientific Research, Professor Abdulrahman Al-Wahhabi, General Supervisor of International Cooperation Agreements, and a number of university leaders.
        </p>
      </div>
      <div className="Interaction">
        <div>
          <i class="fa-solid fa-heart"></i>
          <h3>Like</h3>
        </div>
        <div>
          <i class="fa-solid fa-share"></i>
          <h3>Share</h3>
        </div>
      </div>
    </section>
  )
}

export default News