import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class MobileOtp extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div>
        <div className="ltn__login-area pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Sign In <br />
                    To Your Mobile OTP
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
              <div className="col-lg-6">
                <div className="account-login-inner">
                  <form method="GET" className="ltn__form-box contact-form-box">
                    {/* <select name="" id="">
                      <option value="+91">+91</option>
                    </select> */}
                    <input
                      type="number"
                      name="number"
                      placeholder="Enter Mobile Number"
                    />
                    <div className="btn-wrapper mt-0">
                      {/* <Link
                        className="theme-btn-1 btn btn-block"
                        to="./GetOtp"
                      >
                        Get OTP
                      </Link> */}
                      <button
                        type="button"
                        className="theme-btn-1 btn btn-block"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Get OTP
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                              Modal title
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">...</div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="theme-btn-1 btn btn-block">
                              Verify
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="account-create text-center pt-50">
                  <h4>DON'T HAVE AN ACCOUNT?</h4>
                  <p>
                    Add items to your wishlistget personalised recommendations{" "}
                    <br />
                    check out more quickly track your orders register
                  </p>
                  <div className="btn-wrapper go-top">
                    <Link to="/register" className="theme-btn-1 btn black-btn">
                      CREATE ACCOUNT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__modal-area ltn__add-to-cart-modal-area----">
          <div
            className="modal fade"
            id="ltn_forget_password_modal"
            tabIndex={-1}
          >
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-info text-center">
                            <h4>FORGET PASSWORD?</h4>
                            <p className="added-cart">
                              {" "}
                              Enter you register email.
                            </p>
                            <form action="#" className="ltn__form-box">
                              <input
                                type="text"
                                name="email"
                                placeholder="Type your register email*"
                              />
                              <div className="btn-wrapper mt-0">
                                <button
                                  className="theme-btn-1 btn btn-full-width-2"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + "assets/img/icons/payment.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileOtp;
