var path = require('path');
var app = require('express')();
var http = require('http').createServer(app);
var serveStatic = require('serve-static');

app.use(serveStatic(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.send('hello');
})

http.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});
