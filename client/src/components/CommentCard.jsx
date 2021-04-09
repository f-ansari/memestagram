import React from 'react'


const CommentCard = (props) => {
  const {username, comment} = props.comment

    return (
    <div>
        <div className="form-container">
           <h3>@{username}</h3>
           <h4>{comment}</h4>
        </div>
    </div>
    )
}

export default CommentCard