import React from 'react';

const ReviewItem = () => {
    return (
        <div class="lg:mb-0 mb-6 p-4 bg-gray-50 mx-3 rounded-xl">
            <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto" src="https://dummyimage.com/302x302"/>
                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gray-500">Senior Product Designer</p>
            </div>
        </div>
    );
};

export default ReviewItem;