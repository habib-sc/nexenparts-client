import React from 'react';
import people from '../../../../assets/icons/people.png';

const ReviewItem = ({review}) => {
    const { reviewerName, description, rating, img } = review;

    return (
        <div class="lg:mb-0 mb-6 p-4 bg-gray-50 mx-3 rounded-xl">
            <div class="h-full text-center">
                
                {img &&
                <div class="avatar mb-5 mt-3">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>}

                {!img &&
                <div class="avatar mb-5 mt-3">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={people} />
                    </div>
                </div>}

                <p class="leading-relaxed">{description}</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{reviewerName}</h2>
                <p class="text-gray-500">Rating: {rating}</p>
            </div>
        </div>
    );
};

export default ReviewItem;