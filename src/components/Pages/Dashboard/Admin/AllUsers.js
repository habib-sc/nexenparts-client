import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Not Allowed To Make Admin!');
            }
            return res.json();
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Successfully Assigned as Admin');
                refetch();
            }
        });
    };

    return (
        <div>
            <h2 className='mt-3 mb-2 text-lg font-semibold bg-red-100 pb-1 pl-2 rounded-lg text-primary'>Total Users: {users?.length}</h2>
            <div class="overflow-x-auto">
                <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead >
                            <tr>
                                <th className='bg-gray-200'>sl</th>
                                <th className='bg-gray-200'>Email</th>
                                <th className='bg-gray-200'>Role</th>
                                <th className='bg-gray-200'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role && <span className='bg-blue-100 rounded-lg pb-1 px-2 text-blue-500'>{user.role}</span>}
                                        {!user.role && <span className='bg-gray-200 rounded-lg pb-1 px-2 text-gray-700'>Regular</span>}
                                    </td>
                                    <td>
                                        {user.role !== 'admin' && <button onClick={ () => makeAdmin(user.email)} className='btn btn-secondary btn-xs'>Make Admin</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default AllUsers;