import React from 'react';
import images from '../images/Uptime.png';
import image1 from '../images/7.png';
import image2 from '../images/SSL.png';
import image3 from '../images/Ups.png';
import image4 from '../images/cPanel_orange_RGB 1.png';
import image5 from '../images/litespeed-logo 1.png';
import image6 from '../images/Rectangle 12.png';
import image7 from '../images/Rectangle 13.png';
import image8 from '../images/Rectangle 11.png';
import image9 from '../images/secured-by-Imunify360-green 1.png';

const Cloudweb = () => {
  
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto py-8">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold leading-tight mb-9">True Cloud Hosting</h1>
              <p className="text-black-600 text-xl  line-clamp-6 mb-12">
                Store any amount of data & retrieve it as often as you like. Start your free trial today. Safe, secure & flexible storage. Let Google power your apps & sites. Try it now. 24x7 Phone Support. Google’s infrastructure. Per-Second Billing.
              </p>
             
            </div>
           
           
            <div className="w-1/2 grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
  
  <div className="md:col-span-1">
    <img src={image4} alt="images" className="mt-10" />
  </div>
  <div className="md:col-span-1">
    <img src={image5} alt="images" className="mt-10" />
  </div>
  <div className="md:col-span-1">
    <img src={image6} alt="images" className="mt-10" />
  </div>

 
 
 
 
  <div className="md:col-span-1">
    <img src={image7} alt="images" className="mt-10" />
  </div>
  <div className="md:col-span-1">
    <img src={image8} alt="images" className="mt-10" />
  </div>
  <div className="md:col-span-1">
    <img src={image9} alt="images" className="mt-10" />
  </div>

      </div>

          </div>
        </div>
     
 

        <div className="max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 row-flow gap-3 m-8  gap-x-10 gap-y-10">
  <div className="flex flex-col md:flex-row md:items-center md:gap-10">
    <div className="h-60 w-60 rounded-full">
      <img src={images} alt="images" className="mt-10" />
    </div>
    <div className="h-60 w-60 rounded-full">
      <img src={image3} alt="images" className="mt-10" />
    </div>
  </div>

  <div className="flex flex-col md:flex-row md:items-center md:gap-10">
    <div className="h-60 w-60 rounded-full">
      <img src={image2} alt="images" className="mt-10" />
    </div>
    <div className="h-60 w-60 rounded-full">
      <img src={image1} alt="images" className="mt-10" />
    </div>
  </div>
</div>
</div>




      </section>
     
    </div>
  );
}

export default Cloudweb;
