const express = require('express');
const cors = require('cors');
const session = require('express-session')
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const middleware = require('./middleware/auth-middleware');
const port = 3000;

const app = express();

app.use(
    cors({
        methods: ['OPTIONS', 'GET', 'POST', 'PATCH', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'path', 'hash', 'pass', 'isLoggedIn'],
        exposedHeaders: ['Access-Control-Allow-Headers', 'isLoggedIn'],
    })
);

// Middleware
const isLoggedIn = ((req, res, next) => {
    console.log(req.headers)
    if (req.header.isLoggedIn) {
        return next();
    }
    else {
        res.render('notAuth')
    }
})


// Routes
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(middleware.verifyToken)

// Template Engines
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/basic', isLoggedIn, (req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
    res.render('login', { title: "login page", heading: "Welcome to login system", loginFailed: false })
})

const userRoute = require('./routes/route');
app.use('/user', userRoute);

app.get('/home', (req, res) => {
    const query = req.query
    res.render('home', query);
})


app.listen(port, () => {
    console.log(`App listening at port http://localhost:${port}`)
})