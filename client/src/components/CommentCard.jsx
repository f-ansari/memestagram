import React from 'react'


const CommentCard = (props) => {
  const {username, comment, id} = props.comment

    return (
        <div>
           <h5>{username}</h5>
           <p>{comment}</p>
           <button className='delete-btn' onClick={() => props.destroyComment(id)}>Delete</button>
        </div>
    )
}

export default CommentCard