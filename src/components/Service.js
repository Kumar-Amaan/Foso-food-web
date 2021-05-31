import React from "react";
import Card from "../components/Card";
import Sdata from "../components/Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Best Restraunts</h1>
      </div>
      <div className="container-fluid mb-auto">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    // imgsrc={val.imgsrc}
                    title={val.title}
                    btname={val.btname}
                    Rating={val.Rating}
                    desc={val.desc}
                    thumb={val.thumb}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
