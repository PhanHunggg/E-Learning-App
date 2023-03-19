import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store/config'
import RightItem from './RightItem'
import { RegistrationCourseDetailDto, SignUpCourseDto } from "./../../../../../interfaces/course"
import { userProfileDto } from '../../../../../interfaces/user'
import { fetchUserProfileApi } from '../../../../../services/user'
import { cancelCourseApi } from '../../../../../services/course '
import { notification } from 'antd'

export default function MyCourseInfo() {
    const [userProfile, setUserProfile] = useState<userProfileDto<RegistrationCourseDetailDto> | any>()
    const eduState = useSelector((state: RootState) => state.eduReducer)

    const [courseList, setCourseList] = useState<RegistrationCourseDetailDto[]>([])

    useEffect(() => {
        getUserProfile();
    }, []);

    const getUserProfile = async () => {
        const userProfile = await fetchUserProfileApi()
        setUserProfile(userProfile.data);
        setCourseList(userProfile.data?.chiTietKhoaHocGhiDanh);
    }



    const handleCancel = async (id: string) => {
        const data: SignUpCourseDto = {
            maKhoaHoc: id || "",
            taiKhoan: eduState.userInfo?.taiKhoan || "",
        }

        try {
            await cancelCourseApi(data)

            const data2 = [...courseList]

            const idx = data2?.findIndex((ele: RegistrationCourseDetailDto) => ele.maKhoaHoc === id)

            data2.splice(idx, 1)

            setCourseList(data2)

            notification.success({
                message: "Hủy khóa học thành công",
                duration: 1,
            })

        } catch (error: any) {
            notification.error({
                message: error.response.data,
                duration: 2,
            })
        }
    }


    const renderItem = () => {
        return courseList?.map((ele: RegistrationCourseDetailDto) => {
            return <RightItem handleCancel={handleCancel} key={ele.maKhoaHoc} ele={ele} />
        })
    }


    return (

        <div className="myCourseInfo">
            <div className="myCourse">
                <h4>Khóa học của tôi</h4>
                <form className='form' >
                    <input type="text" placeholder='Tìm khóa học...' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            <div className="myCourseItem">
                {renderItem()}
            </div>
        </div>
    )
}
