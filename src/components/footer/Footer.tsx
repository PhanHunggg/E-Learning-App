import React from 'react'
import { IPHONE6, IPHONE6PLUS, MOBILE, TABLET } from '../../constants';
import { withViewport } from '../../HOCs/withViewport';
import FooterTop from './components/FooterTop'
import "./footer.scss"

interface Props {
    device: any;
  }

function Footer(props: Props): JSX.Element {
    return (
        <section className={`footer ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPHONE6 && "iphone6"} ${props.device === IPHONE6PLUS && "iphone6_plus"}`}>
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
        </section>
    )
}

export default withViewport(Footer)