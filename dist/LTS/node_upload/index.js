var http = require('http'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    formidable = require('formidable'),
    path = require('path'),
    serverModule = require('./server'),
    host = '127.0.0.1',
    rootDir = './',
    port = 8901,
    staticServer,
    httpServer,
    main;




main = {
    init: function(root) {
        var me = this;
        this.root = path.normalize(path.resolve(root || rootDir));

        this.uploadDir = path.resolve(path.join(this.root, 'tmp'));

        if (!fs.existsSync(this.uploadDir)) {
            mkdirp(this.uploadDir);
        }

        staticServer = new serverModule.Server(this.root, {
            headers: { 'Access-Control-Allow-Origin': '*' }
        });

        httpServer = http.createServer(function(req, res) {
            var url = req.url;
            if (url.match(/\/(upload(\/|$))/i)) {
                me.doUpload(req, res);
            } else {
                me.doGet(req, res);
            }
            //console.log("> " + req.url + " - " + res.message);
        }).listen(port);
        console.info('http://' + host + ':' + port);
    },
    doUpload: function(req, res) {
        if (req.method.match(/options/i)) {
            res.writeHead(200, {
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'X-PINGOTHER',
                'Access-Control-Max-Age': 1728000,
                'Keep-Alive': 'timeout=2, max=100000',
                'Content-Length': 0,
                'Transfer-Encoding': 'chunked',
                'Connection': 'Keep-Alive',
                'Content-Type': '*/*'
            });
            res.end();
            return;
        }


        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.keepExtensions = true;
        form.type = 'multipart';
        form.uploadDir = this.uploadDir;
        form.isResponse = false;
        form.on('file', function(name, file) {
            if (!form.isResponse) {
                var args = file.path.split(/\/|\\/g);
                var fileName = args[args.length - 1];
                res.writeHead(200, {
                    'Content-Type': 'text/html',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(fileName);
            }
            form.isResponse = true;
        });
        form.parse(req, function(err, fields, files) {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/html'
                });
                res.end(err);
            }
            //callback(req, res, fields);
        });
    },
    doGet: function(request, response) {
        staticServer.serve(request, response, function(err, res) {
            var headers = request.headers;

            if (err) {
                console.error("> Error serving " + request.url + " - " + err.message);
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }
};

main.init(rootDir);
