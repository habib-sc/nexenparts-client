import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ItemDeleteConfirm from './ItemDeleteConfirm';

const AllProducts = () => {

    const [deleteItem, setDeleteItem] = useState({});

    const { data: allparts, isLoading, refetch } = useQuery('allParts', () => fetch('https://mighty-chamber-14802.herokuapp.com/parts', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    return (
        <div>
        <h2 className='mt-3 mb-2 text-lg font-semibold bg-red-100 pb-1 pl-2 rounded-lg text-primary'>Total Products: {allparts?.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th className='bg-gray-200'>sl</th>
                            <th className='bg-gray-200'>Image</th>
                            <th className='bg-gray-200'>Item</th>
                            <th className='bg-gray-200'>Price</th>
                            <th className='bg-gray-200'>Available Quantity</th>
                            <th className='bg-gray-200'>Min Order QTY</th>
                            <th className='bg-gray-200'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allparts?.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.img} className='w-16 rounded-lg' alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity} /Pcs</td>
                                <td>{item.minOrderQty} /Pcs</td>
                                <td className='w-32'> 
                                    <label onClick={ () => setDeleteItem(item)} htmlFor="delete-item" className='btn btn-xs btn-error text-white ml-2'>Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>

        {deleteItem &&
            <ItemDeleteConfirm deleteItem={deleteItem} setDeleteItem={setDeleteItem} refetch={refetch}></ItemDeleteConfirm>
        }




    </div>
    );
};

export default AllProducts;