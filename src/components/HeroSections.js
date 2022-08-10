import React from 'react'
import '../components/HeroSection.css';

function HeroSection() {
  return (
    <section>
     <div className="margin"> 
     <div className='HeroSection'>
    <div className="HeroSection__details">
     <h3>Food App</h3>
     <h1>Why stay hungry when <br/> 
you can order form Bella Onojie</h1>
<p>Download the bella onoje’s food app now on</p>
    </div>
    <div className='HeroSection__phones'>
    <img className='mobile1' src={require('../images/Group 53.png')} alt="logo"/>
    </div>
    </div>
     </div>
    </section>
 
  )
}

export default HeroSection;
