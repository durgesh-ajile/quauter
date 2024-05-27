import React, { useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";



const AddListing = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [interior, setInterior] = useState(false);
  const [supervisor, setSupervisor] = useState(false);

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="ltn__appointment-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__appointment-inner">
              <form action="#">
                <h2>1. Description</h2>
                <p>
                  <small>
                    These fields are mandatory: Title, Property Media
                  </small>
                </p>
                <h6>Property Description</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="*Title (mandatory)"
                      />
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="ltn__message"
                        placeholder="Description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <h2>Register Myself As</h2>
                <div className="row my-4">
                  <div className="col-md-3">
                    <label className="checkbox-item">
                      2D Design
                      <input
                        type="checkbox"
                        value="2D Desgin"
                        onClick={() => second==false?setSecond(true):setSecond(false)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="checkbox-item">
                      3D Design
                      <input
                        type="checkbox"
                        value=""
                        onClick={() => third==false?setThird(true):setThird(false)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="checkbox-item">
                      Interior Design
                      <input
                        type="checkbox"
                        onClick={() => interior==false?setInterior(true):setInterior(false)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="checkbox-item">
                      Hire Site Supervisor
                      <input
                        type="checkbox"
                        onClick={() => supervisor==false?setSupervisor(true):setSupervisor(false)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <h6>Your per sq. ft. rate for the service</h6>
                <div className="row">
                  {second == true ? (
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="ltn__name"
                          placeholder="2D Design"
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {second == true ? (
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input type="text" name="ltn__name" placeholder="GST" />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {third == true ? (
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="3D Design"
                      />
                    </div>
                  </div>
                  ) : (
                    ""
                  )}
                  {third == true ? (
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="GST" />
                    </div>
                  </div>
                  ) : (
                    ""
                  )}
                  {interior == true ? (
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Interior Design"
                      />
                    </div>
                  </div>
                  ) : (
                    ""
                  )}
                  {interior == true ? (
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="GST" />
                    </div>
                  </div>
                  ) : (
                    ""
                  )}
                  {supervisor == true ? (
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Site Engineer(Per hour rate)"
                      />
                    </div>
                  </div>
                  ) : (
                    ""
                  )}
                  {supervisor == true ? (
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="GST" />
                    </div>
                  </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* <h2>No. of Category</h2>
                  <div className="row my-4">
                    <div className="col-md-3">
                      <label className="checkbox-item">
                        2D Design
                        <input
                          type="checkbox"
                          value="2D Desgin"
                          onClick={handleclick}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-md-3">
                      <label className="checkbox-item">
                        3D Design
                        <input type="checkbox" value="" onClick={handleclick} />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-md-3">
                      <label className="checkbox-item">
                        Interior Design
                        <input type="checkbox" onClick={handleclick} />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-md-3">
                      <label className="checkbox-item">
                        Hire Site Supervisor
                        <input type="checkbox" onClick={handleclick} />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div> */}

                <h2>2. Media</h2>
                <h6>Add Profile Image</h6>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="btn theme-btn-3 mb-10"
                  accept="image/*"
                />
                <br />
                <p>
                  <small>
                    * At least 1 image is required for a valid
                    submission.Minimum size is 500/500px.
                  </small>
                  <br />
                  <small>* PDF files upload supported as well.</small>
                  <br />
                  <small>* Images might take longer to be processed.</small>
                </p>
                <h6>Add Your Work images</h6>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="btn theme-btn-3 mb-10"
                  multiple
                  accept="image/*"
                />
                 <br />
                <p>
                  <small>
                    * At least 1 image and maximum 4 image is required for a valid submission. Minimum size is 500/500px.
                  </small>
                </p>
                {/* <h6>Video Option</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item">
                        <select className="nice-select">
                          <option>Video from</option>
                          <option>vimeo</option>
                          <option>youtube</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="ltn__name"
                          placeholder="Embed Video ID"
                        />
                      </div>
                    </div>
                  </div> */}
                {/* <h6>Virtual Tour</h6>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="ltn__message"
                      placeholder="Virtual Tour:"
                      defaultValue={""}
                    />
                  </div> */}
                <h2>3. Location</h2>
                <h6>Listing Location</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="*Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Country"
                        required
                        defaultValue="India"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="State"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="City"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Pincode"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="property-details-google-map mb-60">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.66182710358!2d76.84966091102437!3d28.42318782533966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1674623686569!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Latitude (for Google Maps)"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Longitude (for Google Maps)"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="checkbox-item">
                      Enable Google Street View
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Google Street View - Camera Angle (value from 0 to 360)"
                      />
                    </div>
                  </div>
                </div>
                <h2>4. Details</h2>
                <h6>Listing Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="2D Design"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="Price" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="3D Design"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Bedrooms (*only numbers)"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Interior Design"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Exterior Material (*text)"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Hire Site Supervisor"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Exterior Material (*text)"
                      />
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning d-none" role="alert">
                  Please note that the date and time you requested may not be
                  available. We will contact you to confirm your actual
                  appointment details.
                </div>

                <h2>5. Contact</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        name="ltn__name"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        name="ltn__name"
                        placeholder="Alternate mobile number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="email"
                        name="ltn__name"
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="GST" />
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper text-center mt-30">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Submit Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
