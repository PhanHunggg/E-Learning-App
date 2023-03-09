import React from 'react'
import "./banner.scss"

export default function Banner() {
  return (
    <section className='banner px-5'>
      <div className="row">
        <div className="title col-6">
          <div className="cloud">
            <img src="./images/clouds.png" alt="clouds" />
          </div>
          <div className="slogan">
            <img className='sliderPlaneImg' src="./images/paper_plane.png" alt="paper_plane" />
            <h1>Chào mừng</h1>
            <h1>đến với môi trường</h1>
            <h1>V<span>learning</span></h1>
            <button className='btn btn-warning'>Bắt đầu nào</button>
          </div>
          <div className="rocket">
            <img src="./images/rocket.png" alt="rocket" />
          </div>
        </div>
        <div className="image col-6">
          <div className="banner_img">
            <img src="./images/banner.png" alt="banner" />
          </div>
          <div className="cloud top">
            <img src="./images/clouds.png" alt="clouds" />
          </div>
          <div className="cloud mid">
            <img src="./images/clouds.png" alt="clouds" />
          </div>
          <div className="cloud bottom">
            <img src="./images/clouds.png" alt="clouds" />
          </div>
          <div className="message">
            <img src="./images/message.png" alt="message" />
          </div>
        </div>
      </div>
    </section>
  )
}
