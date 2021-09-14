import React, { useState } from 'react';
import { Col } from 'reactstrap';
import PostForm from '../../components/ProductForm';
import api from '../../Assets/lib/api';

const CreatePost = (props) => {

    const [post, setPost] = useState({}) 

    const inputHandler = event =>{
       const {name, value} = event.target
       setPost({...post, [name]: value})
    }

    const buttonHandler = async() =>{
        console.log(post)
        api.makePost(post)
    }

  return (
    <Col xs='12' md='6'>
    <h2>Create a Post</h2>
    <PostForm
    inputHandler={inputHandler}
    buttonHandler={buttonHandler}
    />
      </Col>
      );
    }
    
    export default CreatePost;