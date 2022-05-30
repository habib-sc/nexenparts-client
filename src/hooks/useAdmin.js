import { useEffect, useState } from 'react';
import myAxios from '../myAxios/myAxios';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect( () => {
        const email = user?.email;

        if (email) {
            ( async () => {
                const url = `https://mighty-chamber-14802.herokuapp.com/admin/${email}`
                const { data } = await myAxios.get(url)
                setAdmin(data.admin);
                setAdminLoading(false);
            })();
        }
        
    }, [user]);

    return [admin, adminLoading];
};

export default useAdmin;