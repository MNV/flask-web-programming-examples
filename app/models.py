from sqlalchemy import DateTime, func

from app import db


class Registration(db.Model):
    __tablename__ = "registration"

    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String())
    city = db.Column(db.String())
    index = db.Column(db.Integer())
    address_actual = db.Column(db.String())
    address_legal = db.Column(db.String())
    email = db.Column(db.String())
    password = db.Column(db.String())
    remember = db.Column(db.Boolean())
    created_at = db.Column(DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(DateTime(timezone=True), onupdate=func.now())
