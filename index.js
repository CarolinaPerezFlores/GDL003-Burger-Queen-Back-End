const app = require('./app');

function init() {
    app.listen(3000);
    console.log('server on port 3000');
   }

init()