import React from 'react';
import image4 from '../images/cPanel_orange_RGB 1.png';
import image5 from '../images/litespeed-logo 1.png';
import image6 from '../images/Rectangle 12.png';
import image7 from '../images/Rectangle 13.png';
import image8 from '../images/Rectangle 11.png';
import image9 from '../images/secured-by-Imunify360-green 1.png';
import image15 from '../images/whatsapp.png';

const Nigeron = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="container mx-auto py-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 lg:w-1/2">
                            <h1 className="text-5xl font-bold leading-tight text-center ">We serve over 100  <br />
                                Nigerian Websites</h1>
                            <p className="text-black-600 text-xl line-clamp-6 text-center m-4 ">
                                Connect LemonWares with your favourite tools <br />that  you use daily and keep things on track.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-2">
                          
                            <div className="md:col-span-1 flex justify-center">
                                <img src={image4} alt="images" className="mt-10" />
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <img src={image5} alt="images" className="mt-10" />
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <img src={image6} alt="images" className="mt-10" />
                            </div>

                            
                            <div className="md:col-span-1 flex justify-center">
                                <img src={image7} alt="images" className="mt-10" />
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <img src={image8} alt="images" className="mt-10" />
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <img src={image9} alt="images" className="mt-10" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <div className="flex flex-col items-center justify-center  m-10 w-85 h-80  border border-black  bg-blue-100 sm:m-6 md:m-8 lg:m-10">


                <h1 className="text-5xl font-bold text-center my-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ">
                    We're here to make your <br /> website awesome.
                </h1>


                <div className="flex items-center justify-center  ">


                    <button className="bg-red-600 rounded px-4 py-2 text-white hover:bg-red-800 cursor-pointer flex items-center">
                        <div className="mr-4">
                            <img src={image15} alt="images" />

                        </div>
                        Get in touch with us
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Nigeron

