import React from 'react'
import "./testimonial.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Testimonial() {
    return (
        <section className="testimonial">
            <Swiper navigation={true} modules={[Navigation]} className='feedback mx-auto mySwiper'>
                <SwiperSlide className="content">
                    <div className="slide">
                        <img src="./images/person1.png" alt="person" />
                        <p>Cybersoft là một trung tâm đào tạo nghề tuyệt vời cung cấp nhiều khóa học đa dạng để giúp mọi người phát triển kỹ năng và kiến ​​thức của họ. Họ cung cấp các khóa học trong nhiều lĩnh vực khác nhau như CNTT, kinh doanh, tài chính, v.v. Các giảng viên có nhiều kinh nghiệm và kiến ​​thức trong các lĩnh vực tương ứng của họ. Các lớp học tương tác và hấp dẫn làm cho việc học vui vẻ và thú vị. Trung tâm còn hỗ trợ giới thiệu việc làm giúp học viên tìm được công việc phù hợp sau khi hoàn thành khóa học.</p>
                        <i className='bx bxs-quote-alt-left quote-icon'></i>
                        <div className="detail">
                            <span className="name">Marnie Lotter</span>
                            <span className="job">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="content">
                    <div className="slide">
                        <img src="./images/person2.png" alt="person" />
                        <p>Các giảng viên có nhiều kinh nghiệm và hiểu biết, và họ đam mê giúp đỡ học viên của họ thành công. Các tài liệu khóa học cũng được cấu trúc tốt và dễ hiểu. Ngoài ra, CyberSoft cung cấp hỗ trợ tuyệt vời cho sinh viên của mình, bao gồm các diễn đàn trực tuyến và lớp học ảo để thảo luận và các phiên hỏi đáp.</p>
                        <i className='bx bxs-quote-alt-left quote-icon'></i>
                        <div className="detail">
                            <span className="name">Marnie Lotter</span>
                            <span className="job">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="content">
                    <div className="slide">
                        <img src="./images/person3.png" alt="person" />
                        <p>Nếu bạn đang tìm kiếm một trung tâm đào tạo nghề tốt, thì CyberSoft là một lựa chọn tuyệt vời. Các khóa học của họ rất toàn diện, hấp dẫn và được điều chỉnh để đáp ứng nhu cầu của từng học sinh. Với sự giúp đỡ của họ, bạn có thể có được những kỹ năng cần thiết để biến ước mơ nghề nghiệp của mình thành hiện thực!</p>
                        <i className='bx bxs-quote-alt-left quote-icon'></i>
                        <div className="detail">
                            <span className="name">Marnie Lotter</span>
                            <span className="job">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
