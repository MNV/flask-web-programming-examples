const http = require("http");
const os = require("os");
const fs = require("fs");

const greeting = require("./greeting");
const User = require("./user");
const welcome = require("./welcome");

http.createServer(function (request, response) {

    let requestUrl = request.url;
    if (requestUrl === "/") {
        requestUrl = "/index.html";
    }
    let requestPath = requestUrl.substr(1)

    const filePath = "../" + requestPath;

    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    fs.readFile(filePath, "utf8", function(error, data){

        if (error) {
            response.statusCode = 404;
            response.end("Resource not found!");
        } else {
            let userName = os.userInfo().username;
            let message = greeting.getMessage(userName) + " Это Node.js 😎";
            data = data.replace("{message}", message);
            response.end(data);
        }
    })
}).listen(4000);
