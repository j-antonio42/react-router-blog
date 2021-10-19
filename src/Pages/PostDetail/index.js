import React,{ useState, useEffect } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import { useParams } from 'react-router';
import api from '../../Assets/lib/api';
import './styles.scss'

const PostDetail = (props) => {

  const [ postData, setPostData] = useState({})
  const postId = useParams()

  useEffect( async () =>{
    let result = await api.getPostById(postId.id)
    setPostData(result)
    //console.log(result)
  },[])

  const {name, title, content, image} = postData


  return (
    <div className='container-fluid'>
      <div className="container post-detail">
        <Card className='card-detail'>
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{name}</CardSubtitle>
          </CardBody>
          <img width="100%" src={image} className="img-detail cap" />
          <CardBody>
            <CardText>{content}</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    </div>
    
  );
};

export default PostDetail;