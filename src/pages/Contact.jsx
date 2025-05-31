import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '100%', maxWidth: '500px', padding: '20px' }}>
        <h3 className="mb-3">Contact Us</h3>
        <p><strong>Email:</strong> support@prodmanager.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Tech Street, Halifax, Canada</p>
      </Card>
    </Container>
  );
};

export default Contact;
