import React from "react";
import './heroSect';


const heroSection = () => {
  return (
    <section>
        <div className="hero__section">
            <div className="hero__hero">
            <img src={require('./../../images/image1.jpg')}/>
            </div>
        </div>
    </section>
  )
}

export default heroSection

