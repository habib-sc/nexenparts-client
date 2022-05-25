import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    // Handling adding review 
    const handleAddReview = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        setLoading(true);

        let img;

        if(image){
            // Sending image to image bb server 
            const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`;
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    img = result.data.url;
                    
                }
            });
        }

        const reviewData = {
            reviewerName: data.reviewerName,
            description: data.description,
            reviewerLocation: data.reviewerLocation,
            img: img
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
                            <label htmlFor="">Your Name</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("reviewerName", {required: true})} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Review Description</label>
                            <textarea className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("description", {required: true})} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Address (Optional)</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("reviewerLocation")} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Upload Image (Optional)</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="file" {...register("img")} />
                        </div>
                        
                        <button className='btn btn-secondary mt-5 text-white w-full'>Submit</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddReview;