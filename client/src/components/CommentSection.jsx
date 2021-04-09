import React from 'react'
import CommentCard from '../components/CommentCard'

const CommentSection = (props) => {

    return (
        <div>
          {props.comments ? props.comments.map((comment, i) => (
            <CommentCard key={i} comment={comment} /> ))
          :
            null
          }         
        </div>
    )
}

export default CommentSection