import React, { Component , useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const ServiceDetails=()=>{
  
    const {t} = useTranslation();
    let publicUrl = process.env.REACT_APP_URL + "/get2D_Design"
    let publicUrl2 = process.env.REACT_APP_URL+'/get3D_Design'
    let publicUrl3 = process.env.REACT_APP_URL+'/getInteriorDesigner'
    let publicUrl4 = process.env.REACT_APP_URL+'/getHireSiteEngineer'

    const [data,setData] = useState('');
    const [data2,setData2] = useState('');
    const [data3,setData3] = useState('');
    const [data4,setData4] = useState('');

    const [image, setImage] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')

    const FetchData = async()=>{
      	const response = await fetch(publicUrl);
      	const response2 = await fetch(publicUrl2);
      	const response3 = await fetch(publicUrl3);
      	const response4 = await fetch(publicUrl4);



      	const result = await response.json();
      	const result2 = await response2.json();
      	const result3 = await response3.json();
      	const result4 = await response4.json();
  
      	setData(result.savedTwoD_Design[0]);
      	setData2(result2.savedThreeD_Design[0]);
      	setData3(result3.savedInteriorDesigner[0]);
      	setData4(result4.savedInteriorEngineer[0]);
        
        setImage(result.savedTwoD_Design[0].Image[0].images[0])
        // console.log(image.filename)
        
      	console.log(result);
      	console.log(result2.savedThreeD_Design[0].Image[0].images[0].path);
      	// setImage(result2.savedThreeD_Design[0].Image[0].images[0].path);
      	console.log(result3.savedInteriorDesigner[0]);
      	console.log(result4.savedInteriorEngineer[0]);
      }
      
      
      useEffect(()=>{
        FetchData();
        // console.log(data2.Image[0].images[0].filename)
      },[])

console.log(image);
    return (
      <div className="ltn__page-details-area ltn__service-details-area mb-105">
        <div className="container">
          <div className="row">
            <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
              <div className="nav">
                <a data-bs-toggle="tab" href="#liton_tab_3_1">
                  {t("2D Design")}
                </a>
                <a
                  className="active show"
                  data-bs-toggle="tab"
                  href="#liton_tab_3_2"
                >
                  {t("3D Design")}
                </a>
                <a data-bs-toggle="tab" href="#liton_tab_3_3">
                  {t("Interior Design")}
                </a>
                <a data-bs-toggle="tab" href="#liton_tab_3_4">
                  {t("Hire Site Engineer")}
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ltn__page-details-inner ltn__service-details-inner">
                <div className="ltn__blog-img">
                  <img
                    src={image.destination}
                    alt="Image"
                  />
                </div>
                <p>
                  {" "}
                  <span className="ltn__first-letter">{data.ParagraphOne}</span>
                  {/* orem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exerc itation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. */}
                </p>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione.{" "}
                </p> */}
                <p>{data.ParagraphOne}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={publicUrl + "assets/img/service/31.jpg"}
                      alt="image"
                    />
                    <label>Image caption here.</label>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={publicUrl + "assets/img/service/32.jpg"}
                      alt="image"
                    />
                  </div>
                </div>
                <p>{data.ParagraphTwo}</p>
                <p>{data.ParagraphTwo}</p>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p> */}
                <div className="ltn__service-list-menu text-uppercase mt-50 d-none">
                  <ul>
                    <li>
                      <i className="fas fa-car" /> Front Brakes Repair{" "}
                      <span className="service-price">
                        $225.95 <span>Plus Parts</span>
                      </span>{" "}
                    </li>
                    <li>
                      <i className="fas fa-life-ring" /> Rear Brakes Repair{" "}
                      <span className="service-price">
                        $225.95 <span>Plus Parts</span>
                      </span>{" "}
                    </li>
                    <li>
                      <i className="fas fa-cog" /> Axle{" "}
                      <span className="service-price">
                        $225.95 <span>Plus Parts</span>
                      </span>{" "}
                    </li>
                    <li>
                      <i className="fas fa-car" /> Starters / Alternators{" "}
                      <span className="service-price">
                        $225.95 <span>Plus Parts</span>
                      </span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area ltn__right-sidebar">
                {/* Menu Widget */}
                {/* <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                  <ul className="go-top">
                    <li>
                      <Link to="/service">
                        Property Management{" "}
                        <span>
                          <i className="fas fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/service">
                        Mortgage Service{" "}
                        <span>
                          <i className="fas fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                        Consulting Service{" "}
                        <span>
                          <i className="fas fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                        Home Buying{" "}
                        <span>
                          <i className="fas fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                        Home Selling{" "}
                        <span>
                          <i className="fas fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                        Escrow Services{" "}
                        <span>
                          <i className="fas fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                {/* Newsletter Widget */}
                <div className="widget ltn__search-widget ltn__newsletter-widget">
                  <h6 className="ltn__widget-sub-title">// subscribe</h6>
                  <h4 className="ltn__widget-title">Get Newsletter</h4>
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                  <div className="ltn__newsletter-bg-icon">
                    <i className="fas fa-envelope-open-text" />
                  </div>
                </div>
                {/* Banner Widget */}
                <div className="widget ltn__banner-widget go-top">
                  <Link to="/shop">
                    <img
                      src={publicUrl + "assets/img/banner/banner-1.jpg"}
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default ServiceDetails;
