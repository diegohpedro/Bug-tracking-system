import api from './api';

export async function isAuthenticated()  {
    if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }

        api.post('/autenticar', {}, config).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })

    } else {
        return false
    }
}