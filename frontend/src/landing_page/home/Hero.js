import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-3 p-4" style={{width:"100%"}}/>
        <h1 className="mt-1"> Invest in everything</h1>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          type="button"
          className="btn btn-primary p-2 fs-5 mt-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Hero;
