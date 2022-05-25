import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='border px-5 py-10 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-semibold font-secondary mb-5'>Add Item Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-end'>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Item Name</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("itemName", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Price</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("price", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Item Quantity</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("quantity", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Min Order Quantity</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("minOrderQty", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Upload Image</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="file" {...register("img")} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Description</label>
                        <textarea className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("description", {required: true})} />
                    </div>

                </div>

                <button className='btn btn-secondary btn-sm mt-5 text-white'>Add Item</button>
            </form>
        </div>
    );
};

export default AddProduct;