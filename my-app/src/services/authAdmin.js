import api from './api';

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