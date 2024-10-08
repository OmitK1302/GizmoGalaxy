import React from 'react';
// import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/products/');
      setProducts(data);
    }
    
    fetchData();
  }, []);
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product.name}>
                  <Product product={product} />
              </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen;