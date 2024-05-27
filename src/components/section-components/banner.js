import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useEffect } from "react";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    // slidesToScroll: 1
  }; 

  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const { t} = useTranslation();

  let publicUrl = process.env.REACT_APP_URL + "/getHeaderOne";
    // let publicUrl2 = process.env.REACT_APP_URL + "/getHeaderTwo"

  const FetchData = async () => {
    const response = await fetch(publicUrl);
    // const response2 = await fetch(publ+icUrl2);/
    const result = await response.json();
    // const result2 = await response2.json();
    setData(result.headerOneData);
    // setData2(result2.headerTwoData);
  };

  // const FetchData2 = async () => {
  //   const response2 = await fetch(publicUrl2);
  //   const result2 = await response2.json();
  //   console.log(result2);
  //   setData2(result2.headerTwoData);
  // };
  // console.log(data2);

    useEffect(() => {
      FetchData();

    }, []);

  // useEffect(() => {
  //   FetchData2();
  // }, []);

  let imagealt = "image";

  return (
    <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
      <div className="ltn__slide-one-active slick-slide-dots-1"> 
      {/* slick-slide-arrow-1  */}
        {/* ltn__slide-item */}
        {/* <Slider {...settings}> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <div className="slide-video mb-50 d-none">
                        <a
                          className="ltn__video-icon-2 ltn__video-icon-2-border"
                          href="https://www.youtube.com/embed/tlThdr3O5Qo"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-play" />
                        </a>
                      </div>
                      <h6 className="slide-sub-title white-color--- animated">
                        <span>
                          <i className="fas fa-home" />
                        </span>{" "}
                        {t("Real Estate Agency")}
                      </h6>
                      <h1 className="slide-title animated ">
                        {/* Find Your Dream <br /> House By Us */}
                        {data.Title}
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          {/* Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore. */}
                          {data.Description}
                        </p>
                      </div>
                      <div className="btn-wrapper animated ">
                        <Link
                          to="/about"
                          className="theme-btn-1 btn btn-effect-1 go-top"
                        >
                          {t("Make An Enquiry")}
                        </Link>
                        {/* <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img">
                    <img
                      //   src={publicUrl + "/assets/img/slider/21.png"}//
                      src={data.Image}
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__slide-item */}
        <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal ltn__slide-item-3">
          <div className="ltn__slide-item-inner  text-left text-start">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title white-color--- animated">
                        <span>
                          <i className="fas fa-home" />
                        </span>{" "}
                        Real Estate Agency
                      </h6>
                      <h1 className="slide-title animated ">
                        The Right Place <br />
                        of House Finding
                        {/* {data2.Title} */}
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                        {/* {data2.Description} */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          to="/service"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          OUR SERVICES
                        </Link>
                        <Link
                          to="/about"
                          className="btn btn-transparent btn-effect-3"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img slide-img-left">
                    <img
                      src={publicUrl + "/assets/img/slider/21.png"}
                      // src={data2.Image}
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Slider> */}
        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
