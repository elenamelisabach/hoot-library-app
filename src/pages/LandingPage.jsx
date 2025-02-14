import { Container, Stack } from "react-bootstrap";
import { CustomCarousel } from "../components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { BookCategory } from "./BookCategory";

export function LandingPage() {
  const query = useSelector((state) => state.search.query);

  const categories = [
    "fantasy",
    "history",
    "poetry",
    "science",
    "children",
    "art",
  ];

  return (
    <Stack>
      <CustomCarousel />
      <Container className="py-5">
        {query ? (
          <BookCategory category={query} query={query} />
        ) : (
          categories.map((category) => (
            <BookCategory key={category} category={category} />
          ))
        )}
      </Container>
    </Stack>
  );
}
