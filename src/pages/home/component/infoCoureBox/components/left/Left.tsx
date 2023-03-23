import React from 'react'

export default function Left() {
    return (
        <div className="col-12 col-lg-4 left">
            <div className='infoLargeItem'>

                <div className="content">
                    <h3>Khóa học</h3>
                    <p><span>Học qua dự án thực tế</span>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                    <ul>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Hơn 1000 bài tập và dự án thực tế</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Công nghệ cập nhật mới nhất</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</span>
                        </li>
                    </ul >

                </div >
                <div className="astronaut">
                    <img src="./images/astronaut.png" alt="astronaut" />
                </div>
            </div >
        </div >
    )
}
