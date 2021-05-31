import React from 'react';
import web from '../images/img1.svg'
import Common from './Common';
import Products from './Products';
import Service from './Service';

export default function Home() {
    return (
      <React.Fragment>
      <div className="header">
        <div className="header-info">
            {/* <h1><span className="foso">FOSO </span></h1> */}
            <Common
        name="Order your food with us"
        imgsrc={web}
        visit="/products"
        btname="Scroll Down to explore"
      />
      
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Service />
      <div className="products-home">
          <Products />
          <Products />
          
      </div>
      
      </React.Fragment>
    )
}
