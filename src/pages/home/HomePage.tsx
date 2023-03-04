import React from 'react'
import BoxNumber from './boxNumber/BoxNumber'
import Banner from './component/banner/Banner'
import Course from './component/course/Course'
import InfoCoureBox from './component/infoCoureBox/InfoCoureBox'

export default function HomePage(): JSX.Element {
  return (
    <div >
      <Banner />
      <InfoCoureBox />
      <Course />
      <BoxNumber />
    </div>
  )
}
