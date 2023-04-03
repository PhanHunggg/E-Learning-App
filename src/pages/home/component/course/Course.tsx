<<<<<<< HEAD
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DESKTOP, LAPTOP, TABLET } from "../../../../constants";
import { withViewport } from "../../../../HOCs/withViewport";
import { RootDispatch, RootState } from "../../../../store/config";
import { fetchCourseListAction } from "../../../../store/reducers/eduReducer";
import Front_end from "./components/Front_end";
import Popular from "./components/Popular";
import Reference from "./components/Reference";
import "./course.scss";
=======
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DESKTOP, IPAD_PRO, TABLET } from '../../../../constants';
import { withViewport } from '../../../../HOCs/withViewport';
import { RootDispatch, RootState } from '../../../../store/config';
import { fetchCourseListAction } from '../../../../store/reducers/eduReducer';
import Front_end from './components/Front_end';
import Popular from './components/Popular';
import Reference from './components/Reference';
import "./course.scss"
>>>>>>> 09521f97f2625caee131989520241a20ce055193
interface Props {
  device: any;
}

function Course(props: Props): JSX.Element {
  const dispatch = useDispatch<RootDispatch>();
  const courseState = useSelector((state: RootState) => state.eduReducer);

  useEffect(() => {
    dispatch(fetchCourseListAction());
  }, []);

<<<<<<< HEAD
  return (
    <section
      className={`course py-5 ${
        props.device !== DESKTOP &&
        "active" &&
        props.device !== LAPTOP &&
        "active" &&
        props.device !== TABLET &&
        "active"
      } `}
    >
      <Popular courseState={courseState} />
      <Reference courseState={courseState} />
      <Front_end courseState={courseState} />
    </section>
  );
=======

    return (
        <section className={`course py-5 ${props.device === IPAD_PRO && "iPad_pro"} ${(props.device !== DESKTOP && "active") && (props.device !== IPAD_PRO && "active") && (props.device !== TABLET && "active")} `}>
            <Popular courseState={courseState} />
            <Reference courseState={courseState} />
            <Front_end courseState={courseState} />
        </section>
    )
>>>>>>> 09521f97f2625caee131989520241a20ce055193
}

export default withViewport(Course);
