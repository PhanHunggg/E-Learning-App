
import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  DESKTOP,
  IPHONE6,
  IPHONE6PLUS,
  IPAD_PRO,
  MOBILE,
  TABLET,
} from "../../constants";

import { useLoading } from "../../contexts/loading/LoadingHook";


import { withViewport } from "../../HOCs/withViewport";
import { CourseCatalogDto } from "../../interfaces/course";
import { RootDispatch, RootState } from "../../store/config";
import {
  eduAction,
  fetchCourseCatalogAction,
} from "../../store/reducers/eduReducer";
import "./header.scss";

interface Props {
  device: any;
}

function Header(props: Props): JSX.Element {
  const [isSticky, setSticky] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoading();

  const dispatch = useDispatch<RootDispatch>();
  const courseState = useSelector((state: RootState) => state.eduReducer);
  const navigate = useNavigate();
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(true)
    dispatch(fetchCourseCatalogAction());
    setLoading(false)
  }, [isLoading]);

  const renderCourseCatalog = (): JSX.Element[] => {
    return courseState.courseCatalog.map((ele: CourseCatalogDto) => {
      return (
        <li key={ele.maDanhMuc}>
          <Link className="dropdown-item" to={`/courseCatalog/${ele.maDanhMuc}`} >
            {ele.tenDanhMuc}
          </Link>
        </li>
      );
    });
  };



  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light header ${props.device === MOBILE && "mobile"
        } ${props.device === TABLET && "tablet"} ${props.device === IPHONE6 && "iphone6"
        } ${props.device === DESKTOP && "desktop"} ${props.device === IPHONE6PLUS && "iphone6_plus"
        } ${props.device === IPAD_PRO && "iPad_pro"
        } ${isSticky ? 'sticky' : ''}`}

    >
      <NavLink className="navbar-brand" to="/">
        <img src="https://demo2.cybersoft.edu.vn/logo.png" alt="logo" />
      </NavLink>
      <button
        className="navbar-toggler btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {(props.device === MOBILE ||
        props.device === IPHONE6 ||
        props.device === IPHONE6PLUS ||
        props.device === TABLET) &&
        (courseState?.userInfo ? (
          <div className="userInfo">
            <button
              onClick={() => dispatch(eduAction.handleLogOut())}
              className="btn btn-warning"
            >
              <i className="fa-solid fa-power-off"></i>
            </button>
            <img
              onClick={() => {
                navigate("/profile");
              }}
              src="../images/avatar.jpg"
              alt="avatar"
            />
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-warning btn_login"
          >
            Đăng nhập
          </button>
        ))}

      <div className="collapse navbar-collapse" id="navbarScroll">

        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Danh mục
            </Link>
            <ul className="dropdown-menu courseCatalog">
              {renderCourseCatalog()}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/course">Khóa học</Link>
          </li>

          <li className="nav-item" >
            <Link to="/" className="nav-link disabled">Blog</Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link disabled">Thông tin</Link>
          </li>
          {
            (courseState?.userInfo?.maLoaiNguoiDung === "GV") && <li className="nav-item">
              <Link to="/admin/user-management" className="nav-link ">Admin</Link>
            </li>
          }
        </ul>
        {(props.device === DESKTOP || props.device === IPAD_PRO) &&
          (courseState?.userInfo ? (
            <div className="userInfo">
              <button
                onClick={() => {
                  dispatch(eduAction.handleLogOut());
                  navigate("/");
                }}
                className="btn btn-warning"
              >
                <i className="fa-solid fa-power-off"></i>
              </button>
              <img
                onClick={() => {
                  navigate("/profile");
                }}
                src="../images/avatar.jpg"
                alt="avatar"
              />
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn btn-warning "
            >
              Đăng nhập
            </button>
          ))}
      </div>

    </nav>
  );
}

export default withViewport(Header);
