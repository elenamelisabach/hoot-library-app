import { Carousel, Container, Image, Stack } from "react-bootstrap";

export function CustomCarousel() {
  return (
    <Stack fluid className="bs-secondary-bg w-100">
      <Carousel className="justify-content-center align-items-center m-0 w-100">
        <Carousel.Item>
          <Image
            className="d-block w-100 "
            src="https://media.istockphoto.com/id/1373105718/photo/man-working-or-studying-with-book-business-and-education-concept.jpg?s=612x612&w=0&k=20&c=FFNoIN62qR7uLKcxCAzJuzgAFgeUdIl9pgOaSaq_1Xo="
            alt="First slide"
            style={{ objectFit: "cover", height: "500px" }}
          />
          <Carousel.Caption>
            <h1>Welcome to Hoot Library</h1>
            <p className="fw-semibold">
              Your one-stop online bookstore where stories come alive! Explore
              our vast collection of books, from timeless classics to the latest
              bestsellers. Whether you're seeking inspiration, adventure, or
              knowledge, Hoot Library has something for every reader. Start your
              journey today!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://images.stockcake.com/public/a/2/7/a2706b9a-f62a-47d3-a965-37cf69c6003d_large/owl-in-library-stockcake.jpg"
            alt="Second slide"
            style={{ objectFit: "cover", height: "500px" }}
          />
          <Carousel.Caption>
            <h1>Discover New Adventures</h1>
            <p className="fw-semibold">
              From thrilling mysteries to heartwarming tales, Hoot Library
              brings you books that spark curiosity and fuel your imagination.
              Dive into our handpicked selections and find your next favorite
              read!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/09/43/35/53/360_F_943355334_rLLUwxpquhOClj8lLRgBzNSAEH2L0Upj.jpg"
            alt="Third slide"
            style={{ objectFit: "cover", height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Read, Learn, Grow</h3>
            <p className="fw-semibold">
              Books are the key to endless opportunities. At Hoot Library, we’re
              here to help you expand your knowledge and embrace new ideas.
              Start your journey to growth with our diverse collection!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Stack>
  );
}
