from datetime import datetime
from models.db import db


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

    def __init__(self, name, image, caption):
        self.name = name
        self.image = image
        self.caption = caption

    def json(self):
        return {"id": self.id,
                "name": self.name,
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
        return Post.query.all()

    @classmethod
    def find_by_id(cls, id):
        return Post.query.filter_by(id=id).first()

    @classmethod
    def delete(cls, id):
        post = Post.find_by_id(id)
        db.session.delete(post)
        db.commit()
        return post.json()
