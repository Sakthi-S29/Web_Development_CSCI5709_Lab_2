import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddProduct from './AddProduct';

const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Comfortable and high-quality wireless headphones.',
    price: 120,
    image: 'https://res.cloudinary.com/da3w329cx/image/upload/v1683056487/samples/landscapes/nature-mountains.jpg'
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Stylish smart watch with fitness tracking features.',
    price: 80,
    image: 'https://res.cloudinary.com/da3w329cx/image/upload/v1683056500/cld-sample-5.jpg'
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    description: 'Precision gaming mouse with customizable buttons.',
    price: 40,
    image: 'https://res.cloudinary.com/da3w329cx/image/upload/v1683056499/cld-sample-3.jpg'
  }
];
const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Products</h2>
        <Button variant="primary" onClick={handleShow}>
          + Add Product
        </Button>
      </div>

      {/* Add Product Modal */}
      <AddProduct show={showModal} handleClose={handleClose} />

      {/* Products List or Empty State */}
      {sampleProducts.length === 0 ? (
        <div className="text-center mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="out of stock"
            style={{ width: '150px', opacity: 0.6 }}
            className="mb-3"
          />
          <h5 className="text-muted">We're currently out of stock</h5>
        </div>
      ) : (
        <Row>
          {sampleProducts.map((product) => (
            <Col key={product.id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>${product.price}</strong>
                    <div className="d-flex gap-2">
                      <FaEdit color="green" />
                      <FaTrash color="red" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;

