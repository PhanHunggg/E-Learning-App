import React from 'react'

export default function FooterTop() {
    return (
        <div className="footer_top">
            <div className="row cardTitle">
                <div className="p-2 col-md-4 col-sm-6">
                    <a href="#">
                        <span>V</span>learning
                        <i className="fa-regular fa-keyboard"></i>
                    </a>
                    <ul className='menuFooter'>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>0797720574</span>
                        </li>
                        <li><i className="fa-solid fa-envelope-open-text"></i>
                            <span>phanhung@gmail.com</span>
                        </li>
                        <li><i className="fa-solid fa-location-dot"></i>
                            <span>Tp.Hồ Chí Minh</span>
                        </li>
                    </ul>
                </div>
                <div className="p-2 col-md-2 col-sm-3 col-6">
                    <h3>Liên kết</h3>
                    <ul className="menuFooter arrow">
                        <li><i className="fa-solid fa-caret-right"></i><span>Trang chủ</span></li>
                        <li><i className="fa-solid fa-caret-right"></i><span>Dịch vụ</span></li>
                        <li><i className="fa-solid fa-caret-right"></i><span>Nhóm</span></li>
                        <li><i className="fa-solid fa-caret-right"></i><span>Blog</span></li>
                    </ul>
                </div>
                <div className="p-2 col-md-2 col-sm-3 col-6">
                    <h3>Khóa học</h3>
                    <ul className="menuFooter arrow">
                        <li><i className="fa-solid fa-caret-right"></i><span>Front End</span></li>
                        <li><i className="fa-solid fa-caret-right"></i><span>Back End</span></li>
                        <li><i className="fa-solid fa-caret-right"></i><span>Full stack</span></li>
                        <li><i className="fa-solid fa-caret-right"></i><span>Node Js</span></li>
                    </ul>
                </div>
                <div className="p-2 col-md-4">
                    <h3>Đăng kí tư vấn</h3>
                    <form className='form'>
                        <div className="form-group">

                            <input placeholder='Họ tên' type="text" className="form-control" id="fullName" aria-describedby="fullName" />

                        </div>
                        <div className="form-group">
                            <input placeholder='Email' type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">

                            <input placeholder='Số điện thoại' type="text" className="form-control" id="phone" />
                        </div>
                        <button type="submit" className="btn btn-warning">Đăng ký</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
