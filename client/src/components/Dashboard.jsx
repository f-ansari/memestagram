import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {GetMapPost} from '../store/actions/PostAction'


const mapStateToProps = ({ postState }) => {
  console.log(postState)
  return { postState }

}

const mapDispatchToProps = (dispatch) => {
    return{
      getAllPosts: () => dispatch(GetMapPost())

    }
}


const AllPosts = (props) => {

useEffect(() => {
  props.getAllPosts()
}, [])
console.log(props.postState)


  return (
    <div>
      <h1>All Posts</h1>
        <div className="container">
        {props.postState.mapPost.length ?  (
          props.postState.mapPost.map((post, i) => (
          <div key={i}> 
            <img src={post.image} width="100em"></img>
            <h3>{post.username}</h3>
            <p>{post.caption}</p>
          </div> 
          ))
        ): <h3>Loading</h3> }
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)