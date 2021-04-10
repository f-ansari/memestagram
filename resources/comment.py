from flask_restful import Resource
from flask import request
from models.comment import Comment
from models.db import db


class Comments(Resource):
    def get(self):
        comment = Comment.find_all()
        return comment

    def post(self):
        comment = Comment(**request.get_json())
        comment.create()
        return comment.json(), 201


class SingleComment(Resource):
    def get(self, id):
        comment = Comment.find_by_id(id)
        return comment.json()

    def delete(self, id):
        comment = Comment.delete(id)
        return {'msg': "Comment Deleted", 'payload': comment['id']}

    def put(self, id):
        comment = Comment.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(comment, key, data[key])
        db.session.commit()
        return comment.json()
