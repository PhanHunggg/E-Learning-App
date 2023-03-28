import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DESKTOP, IPAD_PRO, IPHONE6, IPHONE6PLUS, MOBILE, TABLET } from '../../../../constants';
import { withViewport } from '../../../../HOCs/withViewport';
import "./banner.scss"

interface Props {
  device: any;
}

function Banner(props: Props): JSX.Element {
  const navigate = useNavigate()
  return (
    <section className={`banner px-5 ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPHONE6 && "iphone6"} ${props.device === DESKTOP && "desktop"} ${props.device === IPHONE6PLUS && "iphone6_plus"} ${props.device === IPAD_PRO && "iPad_pro"}`}>
      <div className="row">
        <div className="title col-12 col-lg-6">
          <div className="cloud">
            <img src="./images/clouds.png" alt="clouds" />
          </div>
          <div className="slogan">
            <img className='sliderPlaneImg' src="./images/paper_plane.png" alt="paper_plane" />
            <h1>Chào mừng</h1>
            <h1>đến với môi trường</h1>
            <h1>V<span>learning</span></h1>
            <button onClick={() => {
              navigate("/course")
            }} className='btn btn-warning'>Bắt đầu nào</button>
          </div>
          <div className="rocket">
            <img src="./images/rocket.png" alt="rocket" />
          </div>
        </div>
        <div className="image col-12 col-lg-6">
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

export default withViewport(Banner)