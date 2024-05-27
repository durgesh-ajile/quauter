import React, { Component ,useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const AboutV1 =()=>{
		const[data, setData] = useState('');
		const[arr , setArr] = useState('');
		const {t} = useTranslation();
        let publicUrl = process.env.REACT_APP_URL +'/getAboutUs' ;
		// console.log(publicUrl+'aboutv1');/

		const FetchData = async()=>{
			const response = await fetch(publicUrl);
			const result = await response.json();
			setData(result.savedAboutUs[0]);
			setArr(result.savedAboutUs[0].Services);
		}
		
		useEffect(()=>{
			FetchData();
		},[]);

		// console.log(arr);

    return <div className="ltn__about-us-area pt-120 pb-90 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			          <img src={data.Image} alt="About Us Image" />
			          <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
			            {/* <div className="ltn__video-img ltn__animation-pulse1">
			              <img src={publicUrl+"assets/img/others/8.png" } alt="video popup bg image" />
			              <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
			                <i className="fa fa-play" />
			              </a>
			            </div> */}
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{t("About Us")}</h6>
			            <h1 className="section-title">{data.Title}<span>.</span></h1>
						<p>{data.Description}</p>
			          </div>
			          <ul className="ltn__list-item-half clearfix">
			            <li>
			              <i className="flaticon-home-2" />
						  {arr[0]}
			            </li>
			            <li>
			              <i className="flaticon-mountain" />
						  {arr[1]}

			            </li>
			            <li>
			              <i className="flaticon-heart" />
						  {arr[2]}

			            </li>
			            <li>
			              <i className="flaticon-secure" />
						  {arr[3]}
			            </li>
			          </ul>
			          <div className="ltn__callout bg-overlay-theme-05  mt-30">
					  <p>{data.Textbox}</p>
			          </div>
			          <div className="btn-wrapper animated go-top">
			            <Link to="/service" className="theme-btn-1 btn btn-effect-1">{t("OUR SERVICES")}</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }


export default AboutV1