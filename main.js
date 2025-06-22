const phin = require('phin');

(async () => {
    try {
        const response = await phin('https://google.com');
        console.log('Status Code:', response.statusCode);
        console.log('Response Body:', response.body.toString());
    } catch (error) {
        console.error('Request failed:', error);
    }

    console.log(1/1)
})();
