from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from sqlalchemy.orm import joinedload
from models.post import Post
from resources.post import SinglePost, Posts


app = Flask(__name__)
api = Api(app)

api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/memestagram_db'
api.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(Posts, '/posts')
api.add_resource(SinglePost, '/posts/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)
