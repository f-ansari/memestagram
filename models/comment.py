from datetime import datetime
from models.db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key(True))
    username = db.Column(db.String(20), nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.)
    created_at = db.Column(
        db.DateTime, default=datetime.utc.now, nulllable=False)
    updated_at = db.Column(db.DateTime, defualt=datetime.utc.now,
                           nullable=False, onupdate=datetime.now())

  def __init__(self, username, comment, user_id):
    self.username: username
    self.comment = comment
    self.user_id = user_id 


  def json(self): 
    return {"id": self.id, 
            "username": self.username, 
            "comment": self.comment, 
            "created_at": str(self.created_at), 
            "updated_at": str(self.updated_at)}

  def create(self):
    db.session.add(self)
    db.session.commit()
    return self

    
