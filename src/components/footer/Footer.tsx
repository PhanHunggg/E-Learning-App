import React from 'react'
import FooterTop from './components/FooterTop'
import "./footer.scss"


export default function Footer(): JSX.Element {
    return (
        <div className='footer'>
            <FooterTop />
            <div className="footer_bottom">
                <div className="title">
                    <p>Copyright <i className="fa-regular fa-copyright"></i> 2021. All rights reserved.</p>
                </div>
                <div className="content">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}
