export function ClientAuthenticated()  {
    if (localStorage.getItem('token')) {
        return true

    } else {
        return false
    }
}

export function AdminAuthenticated()  {
    if (localStorage.getItem('adminToken')) {
        return true
    } else {
        return false
    }
}

export function DevAuthenticated() {
    if(localStorage.getItem('devToken')) {
        return true
    } else {
        return false
    }
}