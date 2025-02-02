import { useState } from "react";
import { Button, Col, Container, Form, Row, Image } from "react-bootstrap";
export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Check if the form is valid
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
    // You can handle form submission here if everything is valid
    if (form.checkValidity()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Container className="mt-5 mb-5 min-vh-100 ">
      <Row className="mb-4 text-center text-md-start">
        <Col>
          <h1>Contact Us</h1>
        </Col>
      </Row>
      <Row className="d-flex align-items-center h-100 bg-body-tertiary ">
        {/* Image column */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src="https://pics.craiyon.com/2023-10-01/073ea0f8c1c745b38d23e295fb5491e3.webp"
            fluid
            alt="Illustration"
            className="w-100 h-auto"
          />
        </Col>

        {/* Form column */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="w-100"
            style={{ maxWidth: "500px" }}
          >
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                First name is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Last name is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Message is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="btn-success w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
