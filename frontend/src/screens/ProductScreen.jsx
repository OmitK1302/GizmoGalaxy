import React from 'react'
import { useParams } from 'react-router-dom'
// import products from '../products'
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'
import { useState, useEffect } from 'react'
import outOfStockImg from "../assets/outOfStock.png"

const ProductScreen = () => {

    const [product, setProduct] = useState({});

    const {id:productId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }

        fetchData();
    }, [productId]);
    // const product = products.find((p) => p._id === productId);
    // console.log(product);
    return (
        <>
            <Link to={'/'} className='btn btn-light my-3'>
                Go Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>

                                    <Col>
                                        <strong> ${product.price} </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status: 
                                    </Col>

                                    <Col>
                                        <strong> {product.countInStock > 0 ? "In Stock" : "Out Of Stock "} </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                                
                                <>
                                {product.countInStock === 0 && 
                                    <Image src={outOfStockImg} alt='outOfStock image' fluid />
                                }
                                </>

                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen