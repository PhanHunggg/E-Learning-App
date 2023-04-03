import React from 'react'
import { DESKTOP, IPAD_PRO } from '../../../../constants';
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
            <div className={`row ${(props.device !== DESKTOP && "active") && (props.device !== IPAD_PRO && "active")} ${props.device === IPAD_PRO && "iPad_pro"} `}>
                <Left />
                <Right />
            </div >
        </section >
    )
}

export default withViewport(InfoCoureBox)