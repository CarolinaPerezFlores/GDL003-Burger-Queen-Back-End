const express= require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function init() {
    await app.listen(process.env.PORT || 3000);
    console.log('server on port 3000');

    app.get('/', (req, res) => {
        res.json({"message": "Welcome to Tlacuali application. Take orders quickly. Organize and keep track of all your orders."});
    });
}

init()