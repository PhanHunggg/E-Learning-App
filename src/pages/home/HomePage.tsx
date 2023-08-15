import React, { useEffect } from 'react'
import BoxNumber from './component/boxNumber/BoxNumber'
import Banner from './component/banner/Banner'
import Course from './component/course/Course'
import InfoCoureBox from './component/infoCoureBox/InfoCoureBox'
import Testimonial from './component/testimonial/Testimonial'

export default function HomePage(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  return (
    <div >
      <Banner />
      <InfoCoureBox />
      <Course />
      <BoxNumber />
      <Testimonial />
    </div>
  )
}
