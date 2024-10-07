import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h1 className="fs-1 text-center">People</h1>
        </div>
        <div
          className="row p-5 mb-5"
          style={{ fontSize: "110%", lineHeight: "1.75" }}
        >
          <div className="col-6 text-center mt-5">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h3 className="mt-4 mb-4 text-muted">Nithin Kamath</h3>
            <h5 className="fs-6">Founder, CEO</h5>
          </div>
          <div className="col-6 p-5 fs-6 text-muted">
            <p className="t">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
              <br />
              <br />
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
              <br />
              <br />
              Playing basketball is his zen.
              <br />
              <br />
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
