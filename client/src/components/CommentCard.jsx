import React from 'react'


const CommentCard = (props) => {
  const {username, comment, id} = props.comment

    return (

    <div>
        <div className="card-continer">
           <h4>@{username}</h4>
           <p>{comment}</p>
           <button className='delete-btn' onClick={() => props.destroyComment(id)}>Delete</button>
        </div>
    </div>
    )
}

export default CommentCard