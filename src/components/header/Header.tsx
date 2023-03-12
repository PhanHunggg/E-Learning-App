import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CourseCatalogDto } from "../../interfaces/course";
import { RootDispatch, RootState } from "../../store/config";
import {
  eduAction,
  fetchCourseCatalogAction,
} from "../../store/reducers/eduReducer";
import "./header.scss";
export default function Header(): JSX.Element {
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
          <a className="dropdown-item" href={`/courseCatalog/${ele.maDanhMuc}`} >
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <Link className="navbar-brand" to="/">
        <img src="https://demo2.cybersoft.edu.vn/logo.png" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        style={{ justifyContent: "space-between" }}
        className="collapse navbar-collapse"
        id="navbarScroll"
      >
        <form className="d-flex">
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
        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: 100 }}>
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
            <a className="nav-link" href="/course">Khóa học</a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled">Thông tin</a>
          </li>
        </ul>
        {Object.keys(courseState?.userInfo).length ? (
          <button
            onClick={() => dispatch(eduAction.handleLogOut())}
            className="btn btn-warning"
          >
            Đăng xuất
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-warning"
          >
            Đăng nhập
          </button>
        )}
      </div>
    </nav>
  );
}
