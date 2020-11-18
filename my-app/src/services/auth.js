import api from './api';

export async function isAuthenticated()  {
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