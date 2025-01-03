import React from "react";

export default function ChooseUs() {
  return (
    <>
      <div className="container-fluid mt-5">
      <h1 className="text-center p-5">Why Choose Us</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "23rem", height: "19rem" , marginLeft:"40px" }}>
              <img src="/img/professional.avif" height={120} width={20} className="card-img-top bg-black" alt="img"/>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card" style={{ width: "23rem", height: "19rem", marginLeft:"40px" }}>
              <img src="/img/experience.avif" height={120} width={20} className="card-img-top bg-black" alt="..."/>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "23rem", height: "19rem" , marginLeft:"40px" }}>
              <img src="/img/quality.avif" height={120} width={20}  className="card-img-top bg-black" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
