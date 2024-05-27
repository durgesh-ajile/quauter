import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
		// let { t } = useTranslation();
        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo-2.png"} alt="Logo" />
				              </div>
				            </div>
				            <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Brooklyn, New York, United States</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+0123-456789">+0123-456789</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:contact@deraa.com">contact@deraa.in</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Company</h4>
				            <div className="footer-menu go-top">
				              <ul>
							<li><Link to="/about">About</Link></li>
				                <li><Link to="/service">Services</Link></li>
				                <li><Link to="/blog-grid">Blog</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact">Contact</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Users</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Log in</Link></li>
				                <li><Link to="/register">Register/New User</Link></li>
				                <li><Link to="/login">Terms & Conditions</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Freelancer</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Log in as Freelancer</Link></li>
				                <li><Link to="/Freelancer">My account</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/add-listing">Pricing & Subscription</Link></li>
				                <li><Link to="/faq">Terms & Conditions</Link></li>
				                <li><Link to="/contact">Privacy Policy</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Newsletter</h4>
				            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				            <div className="footer-newsletter">
				              <form action="#">
				                <input type="email" name="email" placeholder="Email*" />
				                <div className="btn-wrapper">
				                  <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div>
				            {/* <h5 className="mt-30">We Accept</h5> */}
				            {/* <img src={publicUrl+"assets/img/icons/payment-4.png"} alt="Payment Image" /> */}
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1