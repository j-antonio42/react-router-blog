import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './styles.scss'

const ProductCard = (props) => {

    const { postKey } = props
    const {name, title, content, image} = props.cardData

  return (
    <Col xs="12" md="4" key={postKey} className="mb-3">
      <Card>
        <CardImg top width="100%" src={image} className="card-image" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{name}</CardSubtitle>
          <CardText>{content}</CardText>
          <Link to={`/detail/${postKey}`} >
            <Button>Detalle</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;