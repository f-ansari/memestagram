import React from 'react'


const CommentCard = (props) => {
  const {username, comment, id} = props.comment

    return (

    <div>
        <div className="form-container">
           <h3>@{username}</h3>
           <h4>{comment}</h4>
           <button className='delete-btn' onClick={() => props.destroyComment(id)}>Delete</button>
        </div>
    </div>
    )
}

export default CommentCard