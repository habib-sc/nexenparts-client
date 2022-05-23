import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewItem from './ReviewItem';

const Reviews = () => {
    const [reviews, setReviews] = useState({});

    useEffect( () => {
        ( async () => {
            const { data } = await axios.get('http://localhost:5000/reviews');
            setReviews(data);
        })();
    }, []);
    
    // Slider Setting 
    const sliderSettings = {
        dots: true,
        autoplay: true,
        pauseOnHover: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
      };


    return (
        <div className='container px-4 mx-auto my-20'>
            <h1 class="text-center text-3xl font-bold mb-10 uppercase">Latest Reviews</h1>
            <div class="container px-5 mx-auto">

                {reviews.length > 0 &&
                <div class="">
                        <Slider {...sliderSettings}>
                            {
                                reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                            }
                        </Slider>  
                </div>}
            </div>

        </div>
    );
};

export default Reviews;