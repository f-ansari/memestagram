from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from sqlalchemy.orm import joinedload
from models.post import Post
from models.comment import Comment
from resources.post import SinglePost, Posts, PostComments
from resources.comment import Comments, SingleComment
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/memestagram_db'
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)


api.add_resource(Posts, '/posts')
api.add_resource(SinglePost, '/posts/<int:id>')
api.add_resource(PostComments, '/posts/comments/<int:id>')

api.add_resource(Comments, '/comments')
api.add_resource(SingleComment, '/comments/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)
