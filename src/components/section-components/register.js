// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class Register extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return  <div className="ltn__login-area pb-110">
// 				<div className="container">
// 				<div className="row">
// 					<div className="col-lg-12">
// 					<div className="section-title-area text-center">
// 						<h1 className="section-title">Register <br />Your Account</h1>
// 						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
// 						Sit aliquid,  Non distinctio vel iste.</p>
// 					</div>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col-lg-6 offset-lg-3">
// 					<div className="account-login-inner">
// 						<form action="#" className="ltn__form-box contact-form-box">
// 						<input type="text" name="firstname" placeholder="First Name" />
// 						<input type="text" name="lastname" placeholder="Last Name" />
// 						<input type="text" name="email" placeholder="Email*" />
// 						<input type="number" name="mobile" placeholder="Mobile no*" />
// 						<input type="password" name="password" placeholder="Password*" />
// 						<input type="password" name="confirmpassword" placeholder="Confirm Password*" />
// 						<label className="checkbox-inline">
// 							<input type="checkbox" defaultValue required/>&nbsp;
// 							I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
// 						</label>
// 						<label className="checkbox-inline">
// 							<input type="checkbox" defaultValue required/> &nbsp;
// 							By clicking "create account", I consent to the privacy policy.
// 						</label>
// 						<div className="btn-wrapper">
// 							<button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
// 						</div>
// 						</form>
// 						<div className="by-agree text-center">
// 						<p>By creating an account, you agree to our:</p>
// 						<p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
// 						<div className="go-to-btn mt-50 go-top">
// 							<Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
// 						</div>
// 						</div>
// 					</div>
// 					</div>
// 				</div>
// 				</div>
// 			</div>
//         }
// }

// export default Register

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const responseFacebook = (response) => {
  console.log("login", response);
};

const componentClicked = (data) => {
  console.log(data);
};

const register = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="ltn__login-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Register <br />
                  Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="account-login-inner">
                <form action="#" className="ltn__form-box contact-form-box">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                  <input type="text" name="lastname" placeholder="Last Name" />
                  <input type="text" name="email" placeholder="Email*" />
                  <input type="number" name="mobile" placeholder="Mobile no*" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password*"
                  />
                  <label className="checkbox-inline">
                    <input type="checkbox" defaultValue required />
                    &nbsp; I consent to Herboil processing my personal data in
                    order to send personalized marketing material in accordance
                    with the consent form and the privacy policy.
                  </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" defaultValue required /> &nbsp; By
                    clicking "create account", I consent to the privacy policy.
                  </label>
                  <div className="btn-wrapper">
                    <button
                      className="theme-btn-1 btn reverse-color btn-block"
                      type="submit"
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                  <FacebookLogin
                    appId="737715304366568"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                  />
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse.credential);
                      var decoded = jwt_decode(credentialResponse.credential);
                      console.log(decoded)
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  ;
                </form>
                <div className="by-agree text-center">
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <a href="#">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </a>
                  </p>
                  <div className="go-to-btn mt-50 go-top">
                    <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
