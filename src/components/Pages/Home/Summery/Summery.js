import React from 'react';
import award from '../../../../assets/icons/award.png';
import globe from '../../../../assets/icons/globe.png';
import customer from '../../../../assets/icons/man.png';
import orders from '../../../../assets/icons/trade.png';

const Summery = () => {
    return (
        <section className="">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-center text-3xl font-bold mb-2 uppercase">Obtained Trust World Wide</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our first priority is making happy all the customers</p>
                </div>

                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border shadow-lg border-gray-200 px-4 py-6 rounded-lg">
                            <img src={customer} alt="" className='mx-auto'/>
                            <h2 className="title-font font-medium text-3xl text-gray-900 ml-2 mt-2">2.7K +</h2>
                            <p className="leading-relaxed text-xl">Happy Customers</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border shadow-lg border-gray-200 px-4 py-6 rounded-lg">
                            <img src={globe} alt="" className='mx-auto'/>
                            <h2 className="title-font font-medium text-3xl text-gray-900 ml-2 mt-2">230 +</h2>
                            <p className="leading-relaxed text-xl">Countries</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border shadow-lg border-gray-200 px-4 py-6 rounded-lg">
                            <img src={orders} alt="" className='mx-auto' />
                            <h2 className="title-font font-medium text-3xl text-gray-900 ml-2 mt-2">20 M +</h2>
                            <p className="leading-relaxed text-xl">Completed Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border shadow-lg border-gray-200 px-4 py-6 rounded-lg">
                            <img src={award} alt="" className='mx-auto' />
                            <h2 className="title-font font-medium text-3xl text-gray-900 ml-2 mt-2">300 +</h2>
                            <p className="leading-relaxed text-xl">Awards</p>
                        </div>
                    </div>
                      
                </div>

                <div className='flex flex-wrap justify-between items-center mx-auto p-4 shadow-lg rounded-lg mt-8'>
                    <h2 className='text-2xl font-semibold'>Do you want to buy products ? Or have any question? </h2>
                    <div className='mt-4 md:mt-0 lg:mt-0'>
                        <button className='btn btn-primary mr-3 text-white'>Get A Quote</button>
                        <button className='btn btn-secondary text-white'>Contact Us</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Summery;