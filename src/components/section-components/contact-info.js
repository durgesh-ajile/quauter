import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-address-area mb-90">
				<div className="container">
				<div className="row">
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/10.png"} alt="Icon Image" />
						</div>
						<h3>Email Address</h3>
						<p>contact@deraa.com <br />
						</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/11.png"} alt="Icon Image" />
						</div>
						<h3>Phone Number</h3>
						<p>+0123-456789 <br /></p>
					</div>
					</div>
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/12.png"} alt="Icon Image" />
						</div>
						<h3>Office Address</h3>
						<p>18/A, New Born Town Hall
						New York, US</p>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactInfo