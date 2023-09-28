import React, { useState } from 'react';
import image12 from '../images/Checkmark.png';
import image13 from '../images/Crypto-Learn-Invest-bw-oyl3g9g1y9n29md6xkfxpgebbw87gdfbb0h0u1ci68 2.png';
const Readylemon = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };
    const plans = [
        {
          name: "Starter",
          description: "with all your customers via all conversation channels in one central dashboard.",
          price: "$2.80",
        },
        {
          name: "Standard",
          description: "with all your customers via all conversation channels in one central dashboard.",
          price: "$4.80",
        },
        {
          name: "suprem",
          description: "with all your customers via all conversation channels in one central dashboard.",
          price: "$7.00",
        },
      ];
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen  md:flex lg:flex ">
            <div className="md:w-1/2 lg:w-1/2 p-4">
                <h1 className="text-6xl   font-bold leading-tight line-clamp-2  mb-9 ">Ready to get started <br/> with lemon wares?</h1>
                <p className="text-black-600 text-xl line-clamp-1 mb-8 m-6">Choose the package that suits you</p>
                <div className="flex items-center justify-between space-x-6">
                    <p className="text-lg font-semibold m-6">Monthly</p>

                    <label className="bg-red-300 w-20 h-10 relative rounded-full cursor-pointer m-6">
                        <input type="checkbox" id='check' className="sr-only peer" onChange={handleToggle} checked={isToggleOn} />
                        <span className="w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500"></span>
                    </label>

                    <p className="text-lg font-semibold m-6">Yearly</p>
                    <label className="flex items-center justify-center bg-yellow-200 rounded-full h-10 w-32 m-6">
                        20% discount
                    </label>
                </div>
                <nav className="md:w-1/4 p-4 ">
                    <ul className="flex   ">
                        <li className="relative ml-16 lg:ml-30">
                            <a
                                href="/"
                                className="text-black hover:text-red-400 text-2xl font-bold"

                            >
                                Basic
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-400 transform scale-x-200  transition-transform duration-300"></span>
                            </a>
                        </li>
                        <li className="relative ml-16 lg:ml-30">
                            <a href="/" className="text-black hover:text-red-400 text-2xl font-bold">
                                Premium
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-400 transform scale-x-200 transition-transform duration-300"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
</div>
            </div>
           
            <div className="flex flex-wrap">
      {plans.map((plan, index) => (
        <div key={index} className="w-1/3  sm:w-1/2 md:w-1/3 p-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-400">
            <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold m-3">{plan.name}</h2>
            <p className="text-gray-600 line-clamp-3 m-3">{plan.description}</p>
            <h1 className="text-6xl font-bold m-3">{plan.price}</h1>
            <p className="text-black m-4">per month</p>
            <a
              href="/"
              className="block mt-4 px-4 py-2 bg-white-500 text-black hover:bg-blue-600 rounded-full border border-black text-center"
            >
              Choose this Plan
            </a>
            <ul className=" m-8">
                            <li className="flex items-center m-4  text-gray-400"> <img src={image12} alt="images" className="mr-3" />
                                2GB SSD

                            </li>
                            <li className="flex items-center m-4  text-gray-400">
                                <img src={image12} alt="images" className="mr-3" />10GB Bandwidth

                            </li >
                            <li className="flex items-center m-4 text-gray-400 ">
                                <img src={image12} alt="images" className="mr-3" />
                                15 Email Accounts </li>
                            <li className="flex items-center m-4  text-gray-400"> <img src={image12} alt="images" className="mr-3" /> Unlimited Database</li>
                            <li className="flex items-center m-4  text-gray-400"> <img src={image12} alt="images" className="mr-3" /> 4 Subdomains </li>
                            <li className="flex items-center m-4  text-gray-400"> <img src={image12} alt="images" className="mr-3" /> 1 Parked Domain</li>
                            <li className="flex items-center m-4  text-gray-400"> <img src={image12} alt="images" className="mr-3" /> 2 Websites</li>
                            <li className="flex items-center m-4  text-gray-400"> <img src={image12} alt="images" className="mr-3" /> Free SSL</li>
                            <li className="flex items-center m-4  text-gray-400 "> <img src={image12} alt="images" className="mr-3" /> Softaculous</li>
                        </ul>
          </div>
        </div>
      ))}
    </div>





            <div className="flex justify-between">
  <div className="w-1/2 mx-12">
    <h1 className="text-4xl font-bold  line-clamp-2  bottom-4 text-center">Real Stories from <br/>Real Customers</h1>
    <p className="text-lg  m-3 text-center">Get inspired by these stories.</p>
   
    <div className="bg-white rounded-lg shadow-lg p-6 border border-white-400 w-1/2 float-right ">
    <div className="flex justify-start p-6">
      <img src={image13} alt="images" className="float-left" />
    </div>
    <div className="flex justify-start text-left">
      <p className="text-lg m-5 line-clamp-6 p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
    </div>
    <h3 className="text-left text-2xl font-bold  flex justify-start p-6"> Floyd Miles</h3>
    <span className="text-gray-400 text-left flex justify-start p-6"> Vice President, CLI</span>
    </div>
  </div>
  
  <div className="w-1/2 mx-12 m-10">
  <div className="bg-white rounded-lg shadow-lg p-6 border border-white-400 item-center justify-center  ">
  <div className="w-full ">
    <div className="flex justify-start p-6">
      <img src={image13} alt="images" className="float-left" />
    </div>
    <div className="flex justify-start p-6">
      <p className="text-lg m-1 line-clamp-6 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
    </div>
    <h3 className="text-left text-2xl font-bold p-6">Floyd Miles</h3>
    <span className="text-gray-400 text-left p-6">Vice President, CLI</span>
  </div>

  </div>

  
  <div className="w-1/2  mt-8 m-5 rounded-lg shadow-lg p-6 justify-center screen-center  border border-white-400  "> 
    <div className="flex justify-start p-6">
      <img src={image13} alt="images" className="float-left" />
    </div>
    <div className="flex justify-start p-6">
      <p className="text-lg m-5 line-clamp-2 text-left">LemonWares saved our time in Hosting my company page.</p>
    </div>
    <h3 className="text-left text-2xl font-bold p-6">Floyd Miles</h3>
    <span className="text-gray-400 text-left p-6">Vice President, CLI</span>
  </div>
</div>



 
  
    
  </div>
</div>



        
       
    )
}

export default Readylemon
