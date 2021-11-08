import React,{ useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem,
} from 'reactstrap';
import { useParams } from 'react-router';
import api from '../../Assets/lib/api';
import { AiFillLike } from 'react-icons/ai'
import './styles.scss'

const PostDetail = (props) => {

  const [ postData, setPostData] = useState({})
  const [ comment, setComment] = useState('')
  const postId = useParams().id

  const {name, title, content, image, likes, imageUrl} = postData

  useEffect( async () =>{
    let result = await api.getPostById(postId)
    setPostData(result)
    //console.log(result)
  },[])

  const likeHandler = async () => {
    const newPost = {...postData}
    newPost.likes = newPost.likes + 1
    let result = await api.updatePost(newPost, postId)
    setPostData(result)
  }

  const postComment = async () => {
    const newPost = {...postData}
    newPost.comments ? newPost.comments.push(comment) : newPost.comments = [comment]
    let result = await api.updatePost(newPost,postId)        
    setPostData(result)
    setComment('')  
  }

  const commentHandler = event => {
    const { value } = event.target
    setComment( value )
  }


  return (
    <div className='container-fluid'>
      <div className="container post-detail">
        <Card className='card-detail'>
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{name}</CardSubtitle>
          </CardBody>
             <img width="100%" src={image || imageUrl} className="img-detail cap" />
          <CardBody className='content-card'>
            <CardText>{content}</CardText>
            <Button className='like-button' onClick={likeHandler}><AiFillLike/>{likes}</Button>
          </CardBody>
          <ListGroup>
            { postData.comments && 
                postData.comments.map((item,index) => {
                  return <ListGroupItem key={index}>{item}</ListGroupItem>
                } )}
          </ListGroup>
          <Form className='card-form'>
            <FormGroup>
              <Label for="comments">Comments</Label>
              <Input type="textarea" name="comments" onChange={commentHandler} value={comment} />
              <Button className='publish-button' onClick={postComment}> Publish </Button>
            </FormGroup>
          </Form>
         
        </Card>
      </div>
    </div>
    
  );
};

export default PostDetail;