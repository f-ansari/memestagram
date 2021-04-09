import React from 'react'


const CommentCard = (props) => {
  const {username, comment} = props.comment

    return (
        <div>
           <h5>{username}</h5>
           <p>{comment}</p>
        </div>
    )
}

export default CommentCard