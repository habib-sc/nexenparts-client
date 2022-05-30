import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import myAxios from '../../../../myAxios/myAxios';
import Spinner from '../../../Shared/Spinner/Spinner';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    // Handling adding Product 
    const handleAddProduct = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        setLoading(true);

        // Sending image to image bb server 
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const productData = {
                    name: data.itemName,
                    price: data.price,
                    quantity: data.quantity,
                    minOrderQty: data.minOrderQty,
                    description: data.description,
                    img: img
                };

                // Send Product info to database 
                ( async () => {
                    const { data } = await myAxios.post('https://mighty-chamber-14802.herokuapp.com/add-product', productData);

                    if(data.insertedId){
                        toast.success('Product Added Successfully');
                        reset();
                        setLoading(false);
                    }
                    else{
                        toast.error('Faild To Add Product');
                        setLoading(false);
                    }
                })();
                
            }
        });
    };

    if(loading) {
        return <Spinner></Spinner>
    }
    


    return (
        <div className='border px-5 py-10 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold font-secondary mb-5'>Add Item Here</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-end'>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Item Name</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("itemName", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Price</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="number" {...register("price", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Item Quantity</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="number" {...register("quantity", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Min Order Quantity</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="number" {...register("minOrderQty", {required: true})} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Upload Image</label>
                        <input className='border border-gray-400 py-2 px-2 rounded-lg' type="file" {...register("img")} />
                    </div>
                    <div className='grid gird-cols-1'>
                        <label htmlFor="">Description</label>
                        <textarea className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("description")} />
                    </div>

                </div>

                <button className='btn btn-secondary btn-sm mt-5 text-white'>Add Item</button>
            </form>
        </div>
    );
};

export default AddProduct;