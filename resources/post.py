from flask_restful import Resource
from flask import request
from models.post import Post


class Posts(Resource):
    def get(self):
        post = Post.find_all()
        return post

    def post(self):
        post = Post(**request.get_json())
        post.create()
        return post.json(), 201


class SinglePost(Resource):
    def get(self, id):
        post = Post.find_by_id(id)
        return post.json()

    def delete(self, id):
        post = Post.delete(id)
        return {'msg': 'Post Deleted', 'payload': post['id']}


class PostComments(Resource):
    def get(self, id):
        post = Post.include_comments(id)
        return post
