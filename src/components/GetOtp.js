import React, { Component } from "react";
import OtpInput from "react-otp-input";

 class GetOtp extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="account-login-inner">
            <OtpInput
              value={this.state.otp}
              onChange={this.handleChange}
              numInputs={6}
              separator={<span>-</span>}
            />
            <div className="btn-wrapper mt-0">
              <button className="theme-btn-1 btn btn-block" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetOtp;
