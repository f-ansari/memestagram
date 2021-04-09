import React from 'react'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'

const CommentSection = (props) => {

    return (
        <div>
          <CommentForm id={props.id}/>
          <h1>Comments:</h1>
          <div className="comment-container">
            {props.comments ? props.comments.map((comment, i) => (
              
              <CommentCard key={i} comment={comment}  destroyComment={props.destroyComment}/> ))
            :
              <h3>Loading</h3>
            }
          </div>
        </div>
    )
}

export default CommentSection