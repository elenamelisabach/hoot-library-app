import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Image,
  Alert,
} from "react-bootstrap";
export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Container>
      <Container>
        <Row className="text-center text-md-start my-3">
          <Col className="text-center mt-3">
            <h1>Contact Us</h1>
          </Col>
        </Row>
        <Row className="d-flex align-items-center h-100 bg-body-tertiary my-5">
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

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            {!submitted ? (
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

                <Button type="submit" className="btn-success w-100 mb-3">
                  Submit
                </Button>
              </Form>
            ) : (
              <Row className="justify-content-center">
                <Col xs={12} md={8}>
                  <Alert variant="success" className="text-center">
                    <Alert.Heading>Thank you for contacting us!</Alert.Heading>
                    <p>
                      We appreciate you reaching out. Our team is reviewing your
                      message and will get back to you as soon as possible. We
                      value your feedback and will make sure to address your
                      inquiry promptly.
                    </p>
                    <hr />
                    <p className="mb-0">
                      In the meantime, feel free to browse our website for more
                      information or explore other sections. Have a great day!
                    </p>
                  </Alert>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
