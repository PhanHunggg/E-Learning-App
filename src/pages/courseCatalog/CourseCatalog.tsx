
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CatalogDto, CourseListDto, ManageDto } from '../../interfaces/course'
import { fetchCourseByCatalogApi } from '../../services/courseCatalog'

export default function CourseCatalog(): JSX.Element {
    const params = useParams()
    const [course, setCourse] = useState<CourseListDto<ManageDto,CatalogDto>[]>()

    useEffect(() => {
        getCourseByCatalog()
    },[])
    
    const getCourseByCatalog = async() => {
        const result = await fetchCourseByCatalogApi(params.course || "")
        console.log(result)
        setCourse(result.data)
    }

    const renderCourseByCatalog = () => {
        return course?.map((ele) => {
            return <React.Fragment key={ele.maKhoaHoc}>
            {
             <div className="col-xl-3 col-md-6 card cardGlobalRes mt-4">
                    <Link to={`/course-detail/${ele.maKhoaHoc}`}>
                        <div className="card_header">
                        <img src={ele.hinhAnh} alt={ele.biDanh} />
                            <span>{ele.biDanh}</span>
                        </div>
                        <div className="card_body">
                            <h6>{ele.tenKhoaHoc}</h6>
                            <div className="author">
                                <div className="img">
                                    <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" alt="#" />
                                </div>
                                    <span>{ele.nguoiTao.hoTen}</span>

                            </div>

                        </div>
                        <div className="card_footer">
                            <div className="total">
                                <p>800.000<sup>đ</sup></p>
                                <p>400.000đ</p>
                            </div>
                            <div className="rate">
                                <i className="fa-solid fa-star"></i>
                                <span>4.9</span>
                                <span>(9999)</span>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </React.Fragment>
    })
}

return (
    <div className="course_list">
        <h6>
            <i className='fas fa-bookmark'></i>
            Danh sách khóa học</h6>
        <div className="row ">
            {renderCourseByCatalog()}
        </div>
    </div>
)
}



  

// <a className="nav-link" href="/course">Khóa học</a>
//   <a className="dropdown-item" href={`/courseCatalog/${ele.maDanhMuc}`} ></a>