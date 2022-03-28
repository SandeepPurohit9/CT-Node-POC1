const http = require('http');
const fs = require('fs')

const reStatus = {
    success: 200,
    forbidden: 401,
    notFound: 404
}
const port = 3000


const server = http.createServer((req, res) => {
    const routeMap = {
        '': 'index.html',
		'monday': 'monday.html'
	}
    
    res.statusCode = reStatus.success
    res.setHeader('Content-Type', 'text/html');
    render(res, routeMap[req.url.slice(1)]);
});


const render = (res, htmlFile) => {
    const filepath = `./views/${htmlFile}`.toString()
    

    fs.stat(filepath,  (err, stats) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
        if(err)
        {
            console.log(`${err}`)
        }
        if(stats) {
            fs.createReadStream(filepath).pipe(res).on('error',(err)=>{console.log(err)});
        } else {
            res.statusCode = reStatus.notFound;
            res.end('Sorry, page not found');
        }
    });
}

server.listen(port , ()=>{
    console.log(`Listening to localhost:${port}`)
});