module.exports = {
    /**
     * @description middleware function to verify if user is authorized to view page
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    verifySession: (req, res, next) => {
        const publicPath = ['/', '/logout']
        // checks if headers have authorization token
        const clientSession =req.session;
        if(clientSession.userid && !publicPath.includes(req.path))
        {
            next()
        }
        else{
          return res.status(401).render('notAuth');
        }
    }
}    