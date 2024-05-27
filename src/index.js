import React, { Component } from "react";
import ReactDOM from "react-dom";
// const dotenv = require("dotenv");
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import HomeV1 from "./components/home-v1";
import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Portfolio from "./components/portfolio";
import PortfolioV2 from "./components/portfolio-v2";
import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";
import Location from "./components/location";

import Shop from "./components/shop";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./components/product-details";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";

import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";
import AddListing from "./components/add-listing";
import Wishlist from "./components/wishlist";
import OrderTracking from "./components/order-tracking";
import History from "./components/history";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Freelancer from "./components/Freelancer";
import MobileOtp from "./components/MobileOtp";
import GetOtp from "./components/GetOtp";

const Root= ()=> {
    
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={HomeV1} />
            {/* <Route path="/home-v2" component={HomeV2} />
            <Route path="/home-v3" component={HomeV3} />
            <Route path="/home-v4" component={HomeV4} />
            <Route path="/home-v5" component={HomeV5} />
            <Route path="/home-v6" component={HomeV6} />
            <Route path="/home-v7" component={HomeV7} />   
            <Route path="/home-v8" component={HomeV8} />
            <Route path="/home-v9" component={HomeV9} />
            <Route path="/home-v10" component={HomeV10} /> */}
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/service-details" component={ServiceDetails} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/portfolio-v2" component={PortfolioV2} />
            <Route path="/portfolio-details" component={PortfolioDetails} />
            <Route path="/team" component={Team} />
            <Route path="/team-details" component={TeamDetails} />
            <Route path="/faq" component={Faq} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/404" component={Error} />
            <Route path="/location" component={Location} />
            <Route path="/shop" component={Shop} />
            <Route path="/shop-grid" component={ShopGrid} />
            <Route path="/shop-left-sidebar" component={ShopLeftSidebar} />
            <Route path="/shop-right-sidebar" component={ShopRightSidebar} />

            <Route path="/product-details" component={ProdductDetails} />
            {/* blog */}
            <Route path="/blog-grid" component={BlogGrid} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/blog" component={Blog} />
            <Route path="/MobileOtp" component={MobileOtp} />
            <Route path="/GetOtp" component={GetOtp} />
            <Route path="/blog-details" component={BlogDetails} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/Freelancer" component={Freelancer} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/add-listing" component={AddListing} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/order-tracking" component={OrderTracking} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </HashRouter>
    );
  }


export default Root;

ReactDOM.render(
  <GoogleOAuthProvider clientId="660254697076-k0u0eh7jppl3enmetbk1viipg7cma9n0.apps.googleusercontent.com">
    <Root />
  </GoogleOAuthProvider>,
  document.getElementById("quarter")
);
