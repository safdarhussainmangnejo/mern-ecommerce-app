const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
// const cookieParser = require('cookie-parser');
const connectDB = require('./Database/db');
const routepath = require("./Router/routes");
const productpath = require("./Router/product")
// const authRoutes = require('./routes/auth');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
const filterRoutes = require('./Router/filter');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.use(cookieParser());
// app.use('/api/auth', authRoutes);
// app.use('/api/category', categoryRoutes);
// app.use('/api/product', productRoutes);
// app.use('/uploads', express.static('uploads'));
// app.use('/api/filter', filterRoutes);

connectDB();
// setting path
app.use("/", express.static(path.resolve('uploads')))
app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use('/',routepath)
app.use('/api/product',productpath)
app.use('/api/filter', filterRoutes);
app.get('/', function (req, res) {
    res.send('Hello World');
    console.log("Safdar Here")
})
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 })

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
