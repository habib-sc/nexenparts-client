import React from 'react';

const ReviewItem = ({review}) => {
    const { reviewerName, reviewerLocation, description, img } = review;
    return (
        <div class="lg:mb-0 mb-6 p-4 bg-gray-50 mx-3 rounded-xl">
            <div class="h-full text-center">
                <img src={img} alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto" />
                <p class="leading-relaxed">{description}</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{reviewerName}</h2>
                <p class="text-gray-500">{reviewerLocation}</p>
            </div>
        </div>
    );
};

export default ReviewItem;