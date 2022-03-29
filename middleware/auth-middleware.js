module.exports = {
    /**
     * @description middleware function to verify token sent with request 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    verifyToken: (req, res, next) => {

        // checks if headers have authorization token
        let token = req.headers['Authorization'];

        let publicPaths = [ 
            '/',
            '/login'
        ];
        console.log(req.path)
        if (!token && !publicPaths.includes(req.path)) {
          return res.status(401).send({ auth: false, message: 'No token provided.' });
        }
        else{
            next();
        }
    }
}    