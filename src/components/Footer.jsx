import { Container, Row, Col, Nav, Stack } from "react-bootstrap";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate("/about");
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <Container fluid className="text-center py-3 footer mt-auto">
      <Row className="text-white">
        <Col md={4} className="d-flex flex-column align-items-center">
          <h5> HootLibrary</h5>
          <p>© 2025 HootLibrary. All rights reserved.</p>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center">
          <h5>Quick Links</h5>
          <Nav>
            <Nav.Link onClick={handleNavigateToAbout} className="text-white">
              About Us
            </Nav.Link>

            <Nav.Link onClick={handleNavigateToContact} className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center">
          <h5 className="">Follow Us</h5>
          <Nav className="d-flex flex-row align-items-center">
            <FaFacebookSquare
              size={30}
              className="me-3 cursor"
              style={{ color: "#1877F2" }}
            />

            <FaInstagramSquare
              size={30}
              className="me-3 cursor"
              style={{ color: "#E1306C" }}
            />
            <FaSquareXTwitter
              size={30}
              className="me-3 cursor"
              style={{ color: "#000" }}
            />
            <FaTiktok
              size={30}
              className="me-3 cursor"
              style={{ color: "#000" }}
            />
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
