import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='border px-5 py-10 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold font-secondary mb-5'>Add Review Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='grid grid-cols-1 max-w-[500px] gap-4'>
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
    );
};

export default AddReview;