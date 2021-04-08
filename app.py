from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from sqlalchemy.orm import joinedload


app = Flask(__name__)
api = Api(app)

api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/memestagram_db'
api.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(debug=True)
