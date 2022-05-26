import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';


const AddReview = () => {
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState(0);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    
    const ratingChanged = (newRating) => {
        setRating(newRating)
    };

    // Handling adding review 
    const handleAddReview = data => {

        setLoading(true);

        const reviewData = {
            reviewerName: user?.displayName,
            description: data.description,
            rating: rating,
            img: user?.photoURL
        };

        // Send review info to database 
        ( async () => {
            const { data } = await myAxios.post('http://localhost:5000/add-review', reviewData);

            if(data.insertedId){
                toast.success('Review Added Successfully');
                reset();
                setLoading(false);
            }
            else{
                toast.error('Failed To Add Review');
                setLoading(false);
            }
        })();

    };

    if(loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='border px-5 py-10 rounded-lg shadow-lg w-full'>
            <h2 className='text-2xl text-center font-semibold font-secondary mb-5'>Add Review Here</h2>
            <div className='w-full flex justify-center'>
                <form onSubmit={handleSubmit(handleAddReview)}>
                    
                    <div className='grid grid-cols-1 w-full lg:w-[600px] md:w-[500px] gap-4'>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Review Description</label>
                            <textarea className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("description", {required: true})} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label>Ratings: </label>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        
                        <button className='btn btn-secondary mt-5 text-white w-full'>Submit</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddReview;