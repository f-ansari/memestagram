from datetime import datetime
from models.db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    comment = db.Column(db.String(255),  nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id'), nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    post = db.relationship("Post", backref=db.backref("posts", lazy=True))

    def __init__(self, username, comment, post_id):
        self.username = username
        self.comment = comment
        self.post_id = post_id

    def json(self):
        return {"id": self.id,
                "username": self.username,
                "comment": self.comment,
                "post_id": self.post_id,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_by_id(cls, id):
        return Comment.query.filter_by(id=id).first()

    @classmethod
    def delete(cls, id):
        comment = Comment.find_by_id(id)
        db.session.delete(comment)
        db.session.commit()
        return comment.json()
