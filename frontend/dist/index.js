"use strict";
const axios = require('axios').default;
axios.get('http://localhost:17192/rubineia')
    .then((response) => {
    console.log(response.data);
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
    console.log("done");
});
