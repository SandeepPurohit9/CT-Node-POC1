
const url = require('url')

/**
     * @description controller function to login and send  
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
exports.UserLogin = (req, res) => {
    
    const { email, password } = req.body
    if (email === 'admin@email.com' && password === 'qwe') {
        res.statusCode = 200;
        return res.redirect(url.format({
            pathname: '/home',
            query: { 
                title: "login page", heading: "Welcome , ", userName: 'John doe', token: '1234'
            }
        }))
    } else {
        res.statusCode = 401
        return res.end('Invalid username/password')
    }

}