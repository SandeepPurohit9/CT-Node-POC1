
const url = require('url')
var session;

/**
     * @description controller function to login and send  
     * @param {*} req 
     * @param {*} res 
     */
exports.UserLogin = (req, res) => {
    
    const { email, password } = req.body
    if (email === 'admin@email.com' && password === 'qwe') {
        session=req.session;
        session.userid='John Doe';
        res.statusCode = 200;
        return res.redirect(url.format({
            pathname: '/user/home',
            query: { 
                title: "login page", heading: "Welcome , ", userName: 'John doe', token: '1234'
            }
        }))
    } else {
        res.statusCode = 401
        return res.end('Invalid username/password')
    }

}

/**
     * @description controller function to show user home  
     * @param {*} req 
     * @param {*} res 
     */
exports.UserHome = (req, res) => {
    const query = req.query
    res.render('home', query);
}


/**
     * @description controller function to show user details  
     * @param {*} req 
     * @param {*} res 
     */
exports.UserDetails = (req, res) => {
    res.render('details');
}

/**
     * @description controller function to log user out 
     * @param {*} req 
     * @param {*} res 
     */
exports.UserLogout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

