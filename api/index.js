const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const path = require ('path');
require("dotenv").config();

const app = express();
const products = require('./routes/products')
const orders = require('./routes/orders')

//settings
app.set('port', 80);
//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(cors());

//routes
app.use('/api/products', products);
app.use('/api/orders', orders)


//db
const url = process.env.MONGO_URI;
mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology:true});
//mongodb+srv://GTWV400:DOBLEFALTA@cluster0.svmx0.mongodb.net/CLuster0?retryWrites=true&w=majority


//static files
//app.use(express.static(path.join(__dirname, 'public')));


//listening the server
app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))    
});

