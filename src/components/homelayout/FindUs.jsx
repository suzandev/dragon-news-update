import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold mb-5">Find Us</h3>

      <div>
        <div className="join join-vertical w-full space-y-1">
          <button className="join-item btn bg-base-100 justify-start">
            <FaFacebook /> Facebook
          </button>
          <button className="join-item btn bg-base-100 justify-start">
            <FaTwitter /> Twitter
          </button>
          <button className="join-item btn bg-base-100 justify-start">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
