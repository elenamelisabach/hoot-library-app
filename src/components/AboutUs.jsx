import { Accordion, Container, Stack, Image, Row, Col } from "react-bootstrap";

export function AboutUs() {
  return (
    <Container fluid className="mt-5 mb-5 min-vh-100">
      <Row className="mb-4 ">
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className="align-items-stretch">
        {/* Image Column */}
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center bg-light"
        >
          <Image
            src="https://www.decalvenue.com/cdn/shop/files/F56GOO61a8WguzoWwT_mJ3ufiyVYqGfrmHnCmC06vOE.png?v=1719714010&width=1214"
            fluid
            alt="Library Image"
            className="w-100 h-auto"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </Col>

        {/* Accordion Column */}
        <Col xs={12} md={6} className="d-flex align-items-center">
          <Accordion defaultActiveKey="0" className="w-100 p-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Us</Accordion.Header>
              <Accordion.Body>
                Our library is dedicated to providing a diverse and
                comprehensive collection of books for readers of all ages and
                interests. Whether you're looking for fiction, non-fiction,
                educational resources, or entertainment, we have something for
                everyone. We aim to create a space where people can discover new
                ideas, expand their knowledge, and enjoy the pleasure of
                reading.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Fantasy Books</Accordion.Header>
              <Accordion.Body>
                Immerse yourself in magical worlds and epic adventures with our
                collection of fantasy books. From mythical creatures and
                enchanted lands to powerful heroes and dark forces, our fantasy
                section offers thrilling tales that will captivate your
                imagination.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>History Books</Accordion.Header>
              <Accordion.Body>
                Take a journey through time with our vast collection of history
                books. Whether you're interested in ancient civilizations, world
                wars, or the evolution of societies, our history section
                provides a wealth of knowledge.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Poetry</Accordion.Header>
              <Accordion.Body>
                Discover the beauty of language and emotion in our poetry
                collection. From classic poets to contemporary voices, our
                poetry section offers a rich array of works that evoke deep
                feelings and reflections.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Science Books</Accordion.Header>
              <Accordion.Body>
                Explore the wonders of the natural world and the universe with
                our science books. Whether you're fascinated by physics,
                biology, chemistry, or space exploration, our collection offers
                insights into the forces that govern life and the cosmos.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Children's Books</Accordion.Header>
              <Accordion.Body>
                Introduce young readers to the magic of storytelling with our
                delightful collection of children's books. From picture books
                for toddlers to engaging tales for older kids, our collection
                covers a wide range of genres.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Questions or Concerns</Accordion.Header>
              <Accordion.Body>
                For any inquiries or concerns, please don't hesitate to use the
                contact page. Our team is here to help with any questions about
                your orders, book availability, or anything else. We value your
                experience with Hoot Library and are ready to assist you!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
