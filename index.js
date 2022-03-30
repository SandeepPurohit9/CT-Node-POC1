const express = require('express');
const cors = require('cors');
const session = require('express-session')
const authMiddleware = require('./middleware/auth-middleware')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const url = require('url');
const port = 3000;
const oneDay = 1000 * 60 * 60 * 24;



const app = express();

//===================================
// Middlewares
//===================================

// cross-origin middlewares
app.use(
    cors({
        methods: ['OPTIONS', 'GET', 'POST', 'PATCH', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'path', 'hash', 'pass', 'isLoggedIn'],
        exposedHeaders: ['Access-Control-Allow-Headers', 'isLoggedIn'],
    })
);

// parsing the incoming data
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));

// session middleware
app.use(session({
    secret: "secretkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// cookie parser middleware
app.use(cookieParser());

// a variable to save a session
var ClientSession;


//===================================
// Views
//===================================

// Template Engines
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


//===================================
// Routes
//===================================

app.get('/', (req, res) => {
    ClientSession=req.session;
    if(ClientSession.userid){
        res.redirect(url.format({
            pathname :'/user/home',
            query: { 
                title: "login page", 
                heading: "Welcome , ", 
                userName: 'John doe'
            }}
        ));
    }else{
        req.session.destroy()
        res.render('login', { title: "login page", heading: "Welcome to login system", loginFailed: false })
    }

})

const userRoute = require('./routes/route');
app.use('/user', userRoute);
app.use('/home', userRoute);
app.use('/details', userRoute);
app.use('/logout', userRoute);

app.listen(port, () => {
    console.log(`App listening at port http://localhost:${port}`)
})