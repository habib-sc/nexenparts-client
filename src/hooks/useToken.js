import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect( () => {
        const currentUser = {email: user?.user?.email}
        if(user){
            fetch(`http://localhost:5000/user/${currentUser.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token);
                setToken(data.token);
            })
        }
    }, [user]);

    return [token];
};

export default useToken;