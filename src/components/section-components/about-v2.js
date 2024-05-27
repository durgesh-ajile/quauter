import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useTranslation } from 'react-i18next';
// import env from "react-dotenv";Flink
const AboutV2 = () => {
  const [data, setData] = useState("");
  const [services, setservices] = useState("");
  const [subservices, setsubservices] = useState("");
  const [images,setImages] = useState('');
  const {t} = useTranslation();
  let publicUrl = process.env.REACT_APP_URL + "/getaboutUsTwo";

  const FetchData = async () => {
    const response = await fetch(publicUrl);
    const result = await response.json();
    // console.log(result);
    // setData(result.savedAboutUsTwo[0]);
    // setservices(result.savedAboutUsTwo[0].Services);
    // setsubservices(result.savedAboutUsTwo[0].SubServices);
    // setImages(result.savedAboutUsTwo[0].SubImages);
  };

  useEffect(() => {
    FetchData();
  }, []);

  // console.log(images);

  return (
    <div className="ltn__about-us-area pt-120 pb-90 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  {t("About Us")}
                </h6>
                <h1 className="section-title">{data.Title}</h1>
                <p>
                  {/* Houzez allow you to design unlimited panels and real estate
                  custom forms to capture leads and keep record of all
                  information */}
                  {data.Description}
                </p>
              </div>
              <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                {/* {data.Services.map((item)=><li>{item}</li>)} */}
                {/* <p>{data.Services}</p> */}
                <li>{services[0]}</li>
                <li>{services[1]}</li>
                <li>{services[2]}</li>
                <li>{services[3]}</li>
              </ul>
              <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                <li>
                  <span>
                    3 <i className="flaticon-bed" />
                  </span>
                  {/* Bedrooms */}
                  {subservices[0]}
                </li>
                <li>
                  <span>
                    2 <i className="flaticon-clean" />
                  </span>
                  {subservices[0]}
                </li>
                <li>
                  <span>
                    2 <i className="flaticon-car" />
                  </span>
                  {subservices[0]}
                </li>
                <li>
                  <span>
                    3450{" "}
                    <i className="flaticon-square-shape-design-interface-tool-symbol" />
                  </span>
                  {subservices[0]}
                </li>
              </ul>
              <ul className="ltn__list-item-2 ltn__list-item-2-before--- ltn__list-item-2-img mb-50">
                <li>
                  <a
                    href={publicUrl + "assets/img/img-slide/11.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      // src={publicUrl + "assets/img/img-slide/11.jpg"}
                      // src={images[0]}
                      alt="Image"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={publicUrl + "assets/img/img-slide/12.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      // src={publicUrl + "assets/img/img-slide/12.jpg"}
                      src={images[1]}
                      alt="Image"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={publicUrl + "assets/img/img-slide/13.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      // src={publicUrl + "assets/img/img-slide/13.jpg"}
                      src={images[2]}
                      alt="Image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-right">
              <img
                // src={publicUrl + "assets/img/others/9.png"}
                // src={images[3]}
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutV2;
