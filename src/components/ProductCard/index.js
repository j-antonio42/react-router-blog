import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './styles.scss'

const ProductCard = (props) => {

    const { postKey } = props
    const {name, title, image, imageUrl } = props.cardData

  return (
    <Col xs="12" md="4" key={postKey} className="mb-3">
      <Card>
        <CardImg top width="100%" src={image || imageUrl} className="card-image" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">{name}</CardSubtitle>
          <Link to={`/detail/${postKey}`} >
            <Button className='tongue'>Detalle</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;