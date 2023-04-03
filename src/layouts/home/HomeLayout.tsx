import React from "react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../../components/back-to-top/BackToTopButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function HomeLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </>
  );
}
