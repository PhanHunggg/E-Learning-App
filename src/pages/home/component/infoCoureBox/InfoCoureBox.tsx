import React from 'react'
import Left from './components/left/Left'
import Right from './components/right/Right'
import "./infoCoureBox.scss"
export default function InfoCoureBox() {
    return (
        <section className='infoCoureBox px-5'>
            <div className="row">
                <Left />
                <Right />
            </div >
        </section >
    )
}
