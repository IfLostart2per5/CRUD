const axios = require('axios').default;

axios.get('http://localhost:17192/joao')
.then((response: any) => {
    console.log(response.data);
  })
.catch((error: any) => {
    console.log(error);
  })
.finally(() => {
    console.log("done");
  })
