import React from 'react'
// import { connect } from 'react-redux'
// import { GetOnePost } from '../store/actions/PostAction'

const SinglePostView = (props) => {
    console.log(props.match.params.id)
    return (
        <div>
            <h1>post details</h1>
        </div>
    )
}

export default SinglePostView