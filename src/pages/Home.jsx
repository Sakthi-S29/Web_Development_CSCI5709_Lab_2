import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
        color: 'white',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to ProdManage</h1>
            <p>
              Effortlessly manage your products with our all-in-one tool. Create, view, edit,
              and delete products — fast, simple, and reliable.
            </p>
            <Button variant="light" onClick={() => navigate('/products')}>
              Explore Products
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1533/1533926.png"
              alt="product-list"
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
