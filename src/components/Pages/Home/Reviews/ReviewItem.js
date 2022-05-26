import React from 'react';
import people from '../../../../assets/icons/people.png';

const ReviewItem = ({review}) => {
    const { reviewerName, description, rating, img } = review;

    return (
        <div className="lg:mb-0 mb-6 p-4 bg-gray-50 mx-3 rounded-xl">
            <div className="h-full text-center">
                
                {img &&
                <div className="avatar mb-5 mt-3">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='avatar' />
                    </div>
                </div>}

                {!img &&
                <div className="avatar mb-5 mt-3">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={people} alt='avatar' />
                    </div>
                </div>}

                <p className="leading-relaxed">{description}</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{reviewerName}</h2>
                <p className="text-gray-500">Rating: {rating}</p>
            </div>
        </div>
    );
};

export default ReviewItem;