import React from 'react';
import Cards from '../OurServicesCards/OurServicesCards';
import Img1 from '../../Images/card-item-1.png';
import Img2 from '../../Images/card-item-2.png';
import Img3 from '../../Images/card-item-3.png';

export default function OurServices() {
  return (
    <div>
      <center>
        <div className="con4">
          <h1>Our Services</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad molestiae maxime eligendi optio soluta!</p>
        </div>
      </center>

      <div className="cont">
        <Cards scr={Img1} />
        <Cards scr={Img2} />
        <Cards scr={Img3} />
      </div>
      <br />
      <div>
        <center>
          <button type="button" className="btn btn-dark">Read More</button>
        </center>
      </div>
    </div>
  );
}
