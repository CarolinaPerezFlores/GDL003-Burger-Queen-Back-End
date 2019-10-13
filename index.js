const app = require('./app');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Tlacuali application. Take orders quickly. Organize and keep track of all your orders."});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


