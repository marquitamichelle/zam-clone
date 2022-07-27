import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return <div className="home">
         <div className="home__container">
         <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="image"
          />
        <div className="home__row">
            <Product id="12321341" title= "Smart Mug" price={11.96} image="https://images-na.ssl-images-amazon.com/images/I/51XVAfnPEXL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            rating={3}/>
            <Product id="1666661341" title= "Bluetooth Speaker" price={33.92} image="https://images-na.ssl-images-amazon.com/images/I/81NTmqwqyRL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            rating={5} />
            
           


        </div>
        <div className='home__row'>
        <Product id="12657341" title= "Kitchen Timer" price={13.92} image="https://images-na.ssl-images-amazon.com/images/I/71QYRm4BWwL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            rating={1} />
           
            <Product id="126767341" title= "Klien Headphones" price={23.58} image="https://images-na.ssl-images-amazon.com/images/I/61fU3njgzZL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            rating={5} />
            <Product id="12657341" title= "Coffee Maker" price={57.58} image="https://images-na.ssl-images-amazon.com/images/I/61d4DsBOGwL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            rating={1} />
           
        <div className='home__row'>
            <Product id="126666771" title= "Dinnerware Set" price={21.99} image="https://images-na.ssl-images-amazon.com/images/I/71bq4PWWGvS.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
            rating={3} />
        </div>
 
        </div>
         </div>
        </div>
}
export default Home;