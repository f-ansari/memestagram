import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {GetMapPost} from '../store/actions/PostAction'


const mapStateToProps = ({ postState }) => {
  return { postState }

}

const mapDispatchToProps = (dispatch) => {
    return{
      getAllPosts: () => dispatch(GetMapPost()),
    }
}


const AllPosts = (props) => {

useEffect(() => {
  props.getAllPosts()
   //eslint-disable-next-line
}, [])

  return (
    <div>
      <h1>All Posts</h1>
        <div className="container-grid">
        {props.postState.mapPost.length ?  (
          props.postState.mapPost.map((post, i) => (
          <div className="card" onClick={() => props.history.push(`/postdetail/${post.id}`)}key={i}>
            <div className="contents">
              <img src={post.image} width="100em" alt="memes"></img>
              <h3>{post.username}</h3>
              <p>{post.caption}</p>
            </div>
          </div> 
          ))
        ): <h3>Loading</h3> }
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)