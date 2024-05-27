import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useState } from 'react';

const ServiceV5 =()=> {

	const [data,setData] = useState('');
    const [title0 ,setTitle0] = useState('');
    const [title1 ,setTitle1] = useState('');
    const [title2 ,setTitle2] = useState('');
    const [title3 ,setTitle3] = useState('');
	

        let publicUrl = process.env.REACT_APP_URL+'/getOurMainFocus'
		const FetchData = async() =>{
			const response = await fetch(publicUrl);
			const result = await response.json();
	  
			console.log(result)
	  
			 setData(result.savedGetOurMainFocus[0].Tile);
			 setTitle0(result.savedGetOurMainFocus[0].Tile[0]);
			 setTitle1(result.savedGetOurMainFocus[0].Tile[1]);
			 setTitle2(result.savedGetOurMainFocus[0].Tile[2]);
			 setTitle3(result.savedGetOurMainFocus[0].Tile[3]);
		  }
        // let publicUrl2 = process.env.REACT_APP_URL+'/get3D_Design'
        // let publicUrl3 = process.env.REACT_APP_URL+'/getInteriorDesigner'
        // let publicUrl4 = process.env.REACT_APP_URL+'/getHireSiteEngineer'

		// const FetchData = async()=>{
		// 	const response = await fetch(publicUrl);
		// 	const response2 = await fetch(publicUrl2);
		// 	const response3 = await fetch(publicUrl3);
		// 	const response4 = await fetch(publicUrl4);
		// 	const result = await response.json();
		// 	const result2 = await response2.json();
		// 	const result3 = await response3.json();
		// 	const result4 = await response4.json();

		// 	setData(result.savedTwoD_Design[0]);
		// 	setData2(result2.savedThreeD_Design[0]);
		// 	setData3(result3.savedInteriorDesigner[0]);
		// 	setData4(result4.savedInteriorEngineer[0]);

		// 	console.log(result.savedTwoD_Design[0]);
		// 	console.log(result2.savedThreeD_Design[0]);
		// 	console.log(result3.savedInteriorDesigner[0]);
		// 	console.log(result4.savedInteriorEngineer[0]);
		// }
		// const FetchData = async ()=>{
		// 	const response = await fetch(publicUrl)
		// 	const result = await response.json();
		// 	console.log(result)
		// 	setData
		// }
		useEffect(()=>{
			FetchData();
		},[])

    return <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
						<h1 className="section-title">Our Core Services</h1>
					</div>
					</div>
				</div>
				<div className="row  justify-content-center">
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{title0.title}</Link></h3>
						<p>{title0.description}</p>
						{/* <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p> */}
						</div>
					</div>
					</div>
					
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i class="flaticon-bed-1"></i></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{title1.title}</Link></h3>
						{/* <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p> */}
						<p>{title1.description}</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house-3" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{title2.title}</Link></h3>
						{/* <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p> */}
						<p>{title2.description}</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-operator" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{title3.title}</Link></h3>
						{/* <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p> */}
						<p>{title3.description}</p>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }


export default ServiceV5