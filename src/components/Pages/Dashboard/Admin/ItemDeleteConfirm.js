import React from 'react';
import { toast } from 'react-toastify';
import myAxios from '../../../../myAxios/myAxios';

const ItemDeleteConfirm = ({deleteItem, setDeleteItem, refetch}) => {
    const handleDeleteItem = () => {

        ( async () => {
            const url = `http://localhost:5000/parts/delete/${deleteItem._id}`;
            const { data } = await myAxios.delete(url);
            if(data) {
                toast.success('Item Deleted Successfully.');
                setDeleteItem(null);
                refetch();
            }
        })();

        
        
    };

    return (
        <div>
            <input type="checkbox" id="delete-item" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure you want to delete <span className='text-primary'>{deleteItem.name}</span></h3>
                <p className="py-4">If you click Ok, then Item will be deleted permanently. Your can't restore it.</p>
                <div className="modal-action">
                <label htmlFor="delete-item" className="btn btn-secondary text-white">No</label>
                <label onClick={handleDeleteItem} className="btn btn-error text-white">Yes</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ItemDeleteConfirm;