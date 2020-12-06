# -*- coding: utf-8 -*-
import os

from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from jinja2 import TemplateNotFound

app = Flask(__name__)
app.config.from_object(os.environ["APP_SETTINGS"])
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

from models import Registration


@app.errorhandler(TemplateNotFound)
def page_not_found(error):
    return render_template("errors/404.html", title="404"), 404


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/html/<template>")
def html(template: str):
    return render_template(f"html/{template}.html")


@app.route("/css")
def css():
    return render_template(f"css/index.html")


@app.route("/javascript")
def javascript():
    return render_template(f"javascript/index.html")


@app.route("/jquery")
def jquery():
    return render_template(f"jquery/index.html")


@app.route("/angularjs")
def angularjs():
    return render_template(f"angularjs/index.html")


@app.route("/bootstrap")
def bootstrap():
    return render_template(f"bootstrap/index.html")


@app.route("/sass")
def sass():
    return render_template(f"sass/index.html")


@app.route("/react")
def react():
    return redirect(f"http://localhost:3000", code=301)


@app.route("/nodejs")
def nodejs():
    return redirect(f"http://localhost:4000", code=301)


@app.route("/python", methods=["GET", "POST"])
def python():
    errors = []
    if request.method == "POST":
        country = request.form["inputCountry"]
        city = request.form["inputCity"]
        index = request.form["inputZip"]
        address_actual = request.form["inputAddress"]
        address_legal = request.form["inputAddress2"]
        email = request.form["inputEmail"]
        password = request.form["inputPassword"]
        remember = request.form.get("checkRemember") == "on"

        try:
            result = Registration(
                country=country,
                city=city,
                index=index,
                address_actual=address_actual,
                address_legal=address_legal,
                email=email,
                password=password,
                remember=remember,
            )
            db.session.add(result)
            db.session.commit()

            return redirect(f"/python", code=301)

        except Exception:
            errors.append("Ошибка при добавлении записи в базу данных.")

    records = db.session.query(Registration).all()

    return render_template(f"python/index.html", records=records, errors=errors)
