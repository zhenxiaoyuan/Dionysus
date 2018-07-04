import axios from 'axios';

export function getHello() {
    axios.get('/api/ping')
        .then(function (response) {
            console.log("response: " + response);
            console.log("response.status: " + response.status);
            console.log("response.data: " + response.data);
        })
        .catch(function (error) {
            console.log("error: " + error);
        });
}