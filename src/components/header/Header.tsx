import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DESKTOP, IPHONE6, IPHONE6PLUS, LAPTOP, MOBILE, TABLET } from "../../constants";
import { withViewport } from "../../HOCs/withViewport";
import { useViewPort } from "../../hooks/useViewPort";
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
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const dispatch = useDispatch<RootDispatch>();
  const courseState = useSelector((state: RootState) => state.eduReducer);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCourseCatalogAction());
  }, []);

  const renderCourseCatalog = (): JSX.Element[] => {
    return courseState.courseCatalog.map((ele: CourseCatalogDto) => {
      return (
        <li key={ele.maDanhMuc}>
          <a className="dropdown-item" href="#">
            {ele.tenDanhMuc}
          </a>
        </li>
      );
    });
  };
  const onSearch = (): void => {
    setIsSearch(!isSearch);
  };
  const handleClearSearch = (): void => {
    setKeyword("");
  }
  const handleChange = (event: any) => {
    setKeyword(event.target.value);
    console.log(keyword);

  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light header ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPHONE6 && "iphone6"} ${props.device === DESKTOP && "desktop"} ${props.device === IPHONE6PLUS && "iphone6_plus"}`}>
      <Link className="navbar-brand" to="/">
        <img src="https://demo2.cybersoft.edu.vn/logo.png" alt="logo" />
      </Link>
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


      {
        (props.device === MOBILE || props.device === IPHONE6 || props.device === IPHONE6PLUS || props.device === TABLET) && (courseState?.userInfo ? (
          <div className="userInfo">
            <button
              onClick={() => dispatch(eduAction.handleLogOut())}
              className="btn btn-warning"
            >
              <i className="fa-solid fa-power-off"></i>
            </button>
            <img onClick={() => {
              navigate("/profile")
            }} src="../images/avatar.jpg" alt="avatar" />

          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-warning"
          >
            Đăng nhập
          </button>
        ))
      }

      <div

        className="collapse navbar-collapse"
        id="navbarScroll"
      >
        {
          (props.device === DESKTOP || props.device === LAPTOP) && <form className="d-flex">
            <div className={`search ${isSearch && "active"}`}>
              <div onClick={onSearch} className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="input">
                <input value={keyword} name='search' onChange={handleChange} id='mySearch' type="text" placeholder='Tìm kiếm khóa học' />
              </div>
              <div onClick={handleClearSearch} className="clear">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </form>
        }
        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Danh mục
            </a>
            <ul className="dropdown-menu courseCatalog">
              {renderCourseCatalog()}
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Khóa học</a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled">Thông tin</a>
          </li>
        </ul>
        {
          (props.device === DESKTOP || props.device === LAPTOP) && (courseState?.userInfo ? (
            <div className="userInfo">
              <button
                onClick={() => dispatch(eduAction.handleLogOut())}
                className="btn btn-warning"
              >
                <i className="fa-solid fa-power-off"></i>
              </button>
              <img onClick={() => {
                navigate("/profile")
              }} src="../images/avatar.jpg" alt="avatar" />

            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn btn-warning"
            >
              Đăng nhập
            </button>
          ))
        }
      </div>
    </nav>
  );
}


export default withViewport(Header)