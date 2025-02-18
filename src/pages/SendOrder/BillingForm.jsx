import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export function BillingForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <h4 className="mt-4">Billing Information</h4>

      <Form.Group controlId="name" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="address" className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Row>
        <Col xs={12} md={4} xl={4}>
          <Form.Group controlId="city" className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} xl={4}>
          <Form.Group controlId="zip" className="mb-3">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} xl={4}>
          <Form.Group controlId="paymentMethod" className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={12} lg={6}>
          <Button
            variant="success"
            type="submit"
            className="w-100 w-sm-100 w-md-100 w-lg-50  text-center mt-3 fs-5 mb-3"
          >
            Confirm Order
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
