import React from 'react';
import carParts from '../../../../assets/images/car-parts-bg.jpg';

const GetInTouch = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-4 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div style={{ backgroundImage: `url(${carParts})` }} className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Elmgrove Rd, Harrow, HA1 2RF, UK</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="leading-relaxed">info@nexencarparts.com</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>

                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0 border p-4 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-5 uppercase">Get In Touch</h1>
                    <p className="leading-relaxed mb-5 text-gray-600">Do you have any query? Do you want to make deals? Please feel free to contact us.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="btn btn-secondary text-white">Send Message</button>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;