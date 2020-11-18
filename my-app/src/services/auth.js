import api from './api';

export async function ClientAuthenticated()  {
    if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');

        await api.get('/autenticar', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

    } else {
        return false
    }
}

export async function AdminAuthenticated()  {
    if (localStorage.getItem('adminToken')) {
        const token = localStorage.getItem('adminToken');

        await api.get('/admin/autenticar', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } else {
        return false
    }
}