const BASE_URL = 'http://localhost:3000';

function fetcher(path, options) {
    return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.json())
    .catch(err => console.error('Error: ', err));
}

function getPhoneWords(number) {
    return fetcher(`/${number}`, { method: 'GET' });
}

const Api = {
    getPhoneWords,
}

export default Api;