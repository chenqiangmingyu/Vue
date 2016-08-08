var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var mockup = require('../mockup/tool/mockup');

var app = express();

// create application/json parser
app.use(bodyParser.json());
app.use(multer({dest: path.join(__dirname, './uploader_files')}).single('name'));

module.exports = {
    start: function(port) {
        // GET
        app.get('/api/*', function (req, res) {
            try {
                res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
                res.write(JSON.stringify(mockup.load(req)));
                res.end();
            }
            catch (ex) {
                console.log(ex);
            }
        });

        // POST
        app.post('/api/*', function (req, res) {
            try {
                res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
                res.write(JSON.stringify(mockup.load(req)));
                res.end();
            }
            catch (ex) {
                console.log(ex);
            }
        });

        // HACK: 为了测试build后的可行性，让api服务也跑起了静态文件
        app.get('*', function (req, res) {
            try {
                var filename = req.url;
                if (filename === '/') {
                    filename += 'index.html';
                }
                res.sendFile(path.join(process.cwd(), './dist', filename));
            }
            catch (ex) {
                console.log(ex);
            }
        });

        app.listen(port, 'localhost', function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log('API server start working, Listening at localhost: ' + port);
        });
    }
};
