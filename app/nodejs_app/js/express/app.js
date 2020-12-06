const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const path = require('path')

const app = express();

app.set("view engine", "hbs");
app.set('views', path.join(__dirname, '/views'));

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(path.join(__dirname, '/public')));

hbs.registerHelper("getTime", function () {
    const myDate = new Date();
    const hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return hour + ":" + minute + ":" + second;
});

// логирование запросов
app.use(function (request, response, next) {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    fs.appendFile("server.log", data + "\n", function () {
    });

    next();
});

app.use("/index", function (request, response) {
    response.redirect("/")
});

app.get("/", function (request, response) {

    let queryParameters = request.query;

    response.render("index.hbs", {
        title: "Express",
        description: "Маршрутизация и обработка запросов",
        activeMain: "active",
        queryParameters: queryParameters,
    });

});
app.get("/about", function (request, response) {

    response.render("about.hbs", {
        title: "О сайте",
        description: "Работает на Express 🎉",
        activeAbout: "active",
    });
});
app.listen(4000);
