const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request,response){
    let route = request.url;
    route = (route.startsWith('/assets')) ? '/assets' : route;
    let fileData;
    switch(route) {
        case '/':
            fileData = fs.readFileSync('./views/index.html');
            response.writeHead(200,{"Content-Type": "text/html"});
            break;
        case '/about':
            fileData = fs.readFileSync('./views/about.html');
            response.writeHead(200,{"Content-Type": "text/html"});
            break;
        case '/services':
            fileData = fs.readFileSync('./views/services.html');
            response.writeHead(200,{"Content-Type": "text/html"});
            break;
        case '/contact':
            fileData = fs.readFileSync('./views/contact.html');
            response.writeHead(200,{"Content-Type": "text/html"});
            break;
        case '/assets':
            route = request.url.split('/');
            route = route.slice(2);
            if (route[0] == 'js'){
                fileData = fs.readFileSync('./assets/'+route[0]+'/'+route[1]);
            } else if (route[0] == 'css') {
                fileData = fs.readFileSync('./assets/'+route[0]+'/'+route[1]);
            }
            break;
        case '/todos':
            fileData = fs.readFileSync('data.json');
            response.writeHead(200,{"Content-Type": "text/html"});
            break;
        case '/todApp':
            fileData = fs.readFileSync('./views/todApp.html');
            response.writeHead(200,{"Content-Type": "text/html"});
            break;
        default:
            fileData = fs.readFileSync('./views/404.html');
            response.writeHead(200,{"Content-Type": "text/html"});
    }

    response.end(fileData);
}).listen(3000);



