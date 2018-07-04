import axios from 'axios';

export function getOneArticle() {
    var val;
    axios.get('/api/article/test4')
        .then(function (response) {
            // console.log("response: " + response);
            // console.log("response.status: " + response.status);
            console.log("response.data: " + response.data);

            val = response.data;
        })
        .catch(function (error) {
            console.log("error: " + error);
        });
    
    return val;
}