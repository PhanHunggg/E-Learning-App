import React from 'react'
import { DESKTOP, LAPTOP } from '../../../../constants';
import { withViewport } from '../../../../HOCs/withViewport';
import Left from './components/left/Left'
import Right from './components/right/Right'
import "./infoCoureBox.scss"

interface Props {
    device: any;
}
function InfoCoureBox(props: Props): JSX.Element {
    return (
        <section className='infoCoureBox px-5'>
            <div className={`row ${(props.device !== DESKTOP && "active") && (props.device !== LAPTOP && "active")} `}>
                <Left />
                <Right />
            </div >
        </section >
    )
}

export default withViewport(InfoCoureBox)