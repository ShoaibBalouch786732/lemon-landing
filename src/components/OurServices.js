import React from 'react';
import Cloudweb from './Cloudweb';
import image10 from '../images/Group 6.png';
import Readylemon from './Readylemon';
import Nigeron from './Nigeron';
import Footer from './Footer';



const OurServices = () => {
  const contentArray = [
    {
      text: "Premium Web hosting for your website",
      className: "text-6xl font-bold line-clamp-3 font-45 mb-9",
      tag: "h1",
    },
    {
      text:
        "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
      className: "text-gray-600 line-clamp-3 text-2xl mb-12",
      tag: "p",
    },
  ];
  
  return (
    <>
     < div className="h-80">
      <section className="px-2 md:px-0 m-4 md:m-20">
        <div className="flex flex-col-reverse md:flex-row">
          
          <div className="w-1/2 p-4">
          <nav className="md:w-1/4 p-4 scale-100">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-0">
          <li className="group relative ml-4">
            <a href="/services" className="text-black hover:text-red-400">
              Hosting
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li className="group relative ml-4">
            <a href="/services" className="text-black hover:text-red-400">
              Domain
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li className="group relative ml-4">
            <a href="/services" className="text-black hover:text-red-400">
              SEO
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li className="group relative ml-4">
            <a href="/services" className="text-black hover:text-red-400">
              Email
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
            </nav>
            {contentArray.map((content, index) => (
              <React.Fragment key={index}>
                {content.tag === "h1" ? (
                  <h1 className={content.className}>{content.text}</h1>
                ) : (
                  <p className={content.className}>{content.text}</p>
                )}
              </React.Fragment>
            ))}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4 mb-10">
              Create an Account
            </button>
            <button className="bg-white-500 text-black font-bold py-2 px-4 rounded mt-4 border border-black">
              Choose your plan
            </button>
          </div>

        
          <div className="  w-1/2  p-4">
            <img src={image10} alt="images" />
          </div>
        </div>
      </section>
    

        <Cloudweb/>
        <Readylemon/>
        <Nigeron/>
        <Footer/>
      </div>
    
    </>
  )
}

export default OurServices
