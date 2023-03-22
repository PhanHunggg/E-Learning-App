import React from 'react'
import "./courseBox.scss"
export default function CourseBox() {
  return (
    <div className='courseBox'>
      <div className='row'>
        <div className='col-md-2 col-sm-4 courseBoxItem'>
          <div className='boxContent colorStyle1'>
            <h6>Chương trình học</h6>
            <i className='fas fa-laptop'></i>
            <p>300</p>
          </div>
        </div>
        <div className='col-md-2 col-sm-4 courseBoxItem'>
          <div className='boxContent colorStyle2'>
            <h6>Nhà sáng tạo</h6>
            <i className='fas fa-camera'></i>
            <p>1000</p>
          </div>
        </div> <div className='col-md-2 col-sm-4 courseBoxItem'>
          <div className='boxContent colorStyle3'>
            <h6>Nhà thiết kế</h6>
            <i className='fas fa-briefcase'></i>
            <p>400</p>
          </div>
        </div> <div className='col-md-2 col-sm-4 courseBoxItem'>
          <div className='boxContent colorStyle4'>
            <h6>Bài giảng</h6>
            <i className='fas fa-book'></i>
            <p>3000</p>
          </div>
        </div> <div className='col-md-2 col-sm-4 courseBoxItem'>
          <div className='boxContent colorStyle5'>
            <h6>Video</h6>
            <i className='fas fa-play-circle'></i>
            <p>40000</p>
          </div>
        </div> <div className='col-md-2 col-sm-4 courseBoxItem'>
          <div className='boxContent colorStyle6'>
            <h6>Lĩnh vực</h6>
            <i className='fas fa-dice-d20'></i>
            <p>200</p>
          </div>
        </div>
      </div>
    </div>
  )
}
