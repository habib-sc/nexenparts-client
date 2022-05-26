import React from 'react';
import carParts from '../../../../assets/images/car-parts-bg.jpg';

const GetInTouch = () => {
    return (
        <section class="text-gray-600 body-font relative">
            <div class="container px-4 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div style={{ backgroundImage: `url(${carParts})` }} class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p class="mt-1">Elmgrove Rd, Harrow, HA1 2RF, UK</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a class="text-indigo-500 leading-relaxed">info@nexencarparts.com</a>
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p class="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>

                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0 border p-4 rounded-lg shadow-lg">
                <h1 class="text-3xl font-bold mb-5 uppercase">Get In Touch</h1>
                    <p class="leading-relaxed mb-5 text-gray-600">Do you have any query? Do you want to make deals? Please feel free to contact us.</p>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button class="btn btn-secondary text-white">Send Message</button>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;