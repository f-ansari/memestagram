from datetime import datetime
from models.db import db
from sqlalchemy.orm import joinedload


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    image = db.Column(db.String(255),  nullable=False)
    caption = db.Column(db.String(100))
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    comments = db.relationship(
        "Comment", cascade='all', backref=db.backref('comments', lazy=True))

    def __init__(self, username, image, caption):
        self.username = username
        self.image = image
        self.caption = caption

    def json(self):
        return {"id": self.id,
                "username": self.username,
                "image": self.image,
                "caption": self.caption,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        posts = Post.query.all()
        return [post.json() for post in posts]

    @classmethod
    def find_by_id(cls, id):
        return Post.query.filter_by(id=id).first()

    @classmethod
    def delete(cls, id):
        post = Post.find_by_id(id)
        db.session.delete(post)
        db.session.commit()
        return post.json()

    @classmethod
    def include_comments(cls, post_id):
        post = Post.query.options(joinedload(
            'comments')).filter_by(id=post_id).first()
        comments = [comment.json() for comment in post.comments]
        return {**post.json(), "comments": comments}
