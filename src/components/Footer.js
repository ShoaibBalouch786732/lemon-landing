import React from 'react'
import image20 from '../images/Lemon Wares white Logo 1500px wide 1.png';
import image21 from '../images/Vector (2).png';
const Footer = () => {



  return (
    <div>
      <div className="bg-red-800 text-white py-4 item-center">
  <div className="container mx-auto flex justify-between">
    
    <div className="flex-1 m-10 ">
        <div>
        <img src={image20} alt="images"  />
        </div >
 <p className="text-gray-300 m-3 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
      
 <div className="m-10 text-sm">
  <p className="text-white-600">
    Built by Jeremiah with <img src={image21} alt="images" className="inline-block" /> love in Lagos. Copyright 2021
  </p>
</div>
    </div>

    
    <div className="flex-1 m-10">
      <h3 className=" font-semibold m-8 cursor-pointer">Service</h3>
      <ul>
        
        <li className=" m-8 cursor-pointer">Shared Hosting</li>
        <li className=" m-8 cursor-pointer"> Cloud Hosting</li>
        <li className=" m-8 cursor-pointer">Private Hosting</li>
        <li className=" m-8 cursor-pointer">Domain</li>
      </ul>
    </div>

    
    <div className="flex-1 m-10">
      <h3 className=" font-semibold m-8 cursor-pointer">Hosting</h3>
      <ul>
        
        <li className=" m-8 cursor-pointer"> Cheap Hosting</li>
        <li className=" m-8 cursor-pointer"> Hosting Wordpress</li>
        <li className=" m-8 cursor-pointer">Email Hosting</li>
        <li className=" m-8 cursor-pointer">Hosting Unlimited</li>
      </ul>
    </div>

    
    <div className="flex-1 m-10">
      <h3 className=" font-semibold m-8 cursor-pointer">Company</h3>
      <ul>
        
        <li className=" m-8 cursor-pointer"> About</li>
        <li className=" m-8 cursor-pointer"> Career</li>
        <li className=" m-8 cursor-pointer">Contact Us</li>
      </ul>
    </div>

   
    <div className="flex-1 m-10">
      <h3 className=" font-semibold m-4vcursor-pointer m-8">Help</h3>
      <ul>
       
        <li className=" m-8 cursor-pointer"> FAQ</li>
        <li className="m-8 cursor-pointer"> Help support</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
