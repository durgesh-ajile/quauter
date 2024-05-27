import React, { Component, useEffect , useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useTranslation } from 'react-i18next';
const FeaturesV1 =()=> {
    const [data,setData] = useState('');
    const [title0 ,setTitle0] = useState('');
    const [title1 ,setTitle1] = useState('');
    const [title2 ,setTitle2] = useState('');
    const [title3 ,setTitle3] = useState('');
    const {t} = useTranslation();
    let publicUrl = process.env.REACT_APP_URL + "/getOurMainFocus"

    // let customClass = this.props.customClass ? this.props.customClass : "";

    const FetchData = async() =>{
      const response = await fetch(publicUrl);
      const result = await response.json();

      console.log(result)

      //  setData(result.savedGetOurMainFocus[0].Tile);
      //  setTitle0(result.savedGetOurMainFocus[0].Tile[0]);
      //  setTitle1(result.savedGetOurMainFocus[0].Tile[1]);
      //  setTitle2(result.savedGetOurMainFocus[0].Tile[2]);
      //  setTitle3(result.savedGetOurMainFocus[0].Tile[3]);
    }
  
    useEffect(()=>{
      FetchData();
    },[])

    let customClass =  "";
    console.log(title0.title);
    return (
      <div className={customClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  {t("Our Services")}
                </h6>
                <h1 className="section-title">{t("Our Main Focus")}</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div
                  className="ltn__feature-icon"
                  style={{ paddingTop: "40px", height: "142px" }}
                >
                  <i className="flaticon-home-2"></i>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">{title0.title}</Link>
                  </h3>
                  <p>{title0.description}</p>
                  {/* <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p> */}
                  <Link className="ltn__service-btn" to="/service-details">
                    {t("Find A Home")}
                    <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                <div className="ltn__feature-icon" style={{ paddingTop: "40px", height: "142px" }}>
				<i className="flaticon-house-1" ></i>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">{title1.title}</Link>
                  </h3>
                  <p> {title1.description}</p>
                  {/* <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p> */}
                  <Link className="ltn__service-btn" to="/service-details">
                    {t("Find A Home")} <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div
                  className="ltn__feature-icon"
                  style={{ paddingTop: "40px", height: "142px" }}
                >
                  <i className="flaticon-bed-1"></i>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details"> {title2.title}</Link>
                  </h3>
                  <p>{title2.description}</p>
                  {/* <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p> */}
                  <Link className="ltn__service-btn" to="/service-details">
                    {t("Find A Home")} <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div
                  className="ltn__feature-icon"
                  style={{ paddingTop: "40px", height: "112px" }}
                >
                  <i className="flaticon-operator"></i>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">{title3.title}</Link>
                  </h3>
                  <p>{title3.description}</p>
                  {/* <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p> */}
                  <Link className="ltn__service-btn" to="/service-details">
                    {t("Find A Home")} <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default FeaturesV1;
