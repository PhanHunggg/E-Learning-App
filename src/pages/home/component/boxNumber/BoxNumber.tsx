import React from 'react'
import "./boxNumber.scss"
import CountUp from 'react-countup';
import { withViewport } from '../../../../HOCs/withViewport';
import { DESKTOP, IPAD_PRO, TABLET } from '../../../../constants';

interface Props {
    device: any;
}

function BoxNumber(props: Props): JSX.Element {
    return (
        <section className={`boxNumber ${(props.device !== DESKTOP && "active") && (props.device !== IPAD_PRO && "active") && (props.device !== TABLET && "active")}`}>
            <div className="box px-5 py-5">
                <div className="row">
                    <div className="col-lg-3 pt-2 col-md-6">
                        <div className="boxNumber">
                            <img src="./images/students.png" alt="students" />
                            <div className="textNumber">
                                <CountUp enableScrollSpy={true} duration={2} start={0} end={9000} />
                            </div>
                            <p >Học Viên</p>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-2 col-md-6">
                        <div className="boxNumber">
                            <img src="./images/timetable.png" alt="students" />
                            <div className="textNumber">
                                <CountUp enableScrollSpy={true} duration={2} start={0} end={1000} />
                            </div>
                            <p >Khóa học</p>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-2 col-md-6">
                        <div className="boxNumber">
                            <img src="./images/hourglass.png" alt="students" />
                            <div className="textNumber">
                                <CountUp enableScrollSpy={true} duration={2} start={0} end={33200} />
                            </div>
                            <p >Giờ học</p>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-2 col-md-6">
                        <div className="boxNumber">
                            <img src="./images/teacher.png" alt="students" />
                            <div className="textNumber">
                                <CountUp enableScrollSpy={true} duration={2} start={0} end={400} />
                            </div>
                            <p >Giảng viên</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default withViewport(BoxNumber)