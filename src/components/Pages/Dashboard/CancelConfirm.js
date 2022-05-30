import React from 'react';
import { toast } from 'react-toastify';
import myAxios from '../../../myAxios/myAxios';

const CancelConfirm = ({cancelOrder, setCancelOrder, refetch}) => {

    const handleCancelOrder = () => {

        ( async () => {
            const url = `https://mighty-chamber-14802.herokuapp.com/order/delete/${cancelOrder._id}`;
            const { data } = await myAxios.delete(url);
            toast.success('Order has been cancelled');
            setCancelOrder(null);
            refetch();
        })();

        
        
    };

    return (
        <div>
            <input type="checkbox" id="order-cancel" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure you want to cancel order for <span className='text-primary'>{cancelOrder.itemName}</span></h3>
                <p className="py-4">If you click Ok, then order will be deleted permanently. Your can't restore it.</p>
                <div className="modal-action">
                <label htmlFor="order-cancel" className="btn btn-secondary text-white">No</label>
                <label onClick={handleCancelOrder} className="btn btn-error text-white">Yes</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CancelConfirm;