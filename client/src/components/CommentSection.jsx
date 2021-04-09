import React from 'react'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'

const CommentSection = (props) => {

    return (
        <div>
          <CommentForm id={props.id}/>
          <h1>Comments:</h1>
          {props.comments ? props.comments.map((comment, i) => (
            <CommentCard key={i} comment={comment} /> ))
          :
            null
          }

        </div>
    )
}

export default CommentSection