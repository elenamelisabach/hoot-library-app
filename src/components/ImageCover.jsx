import { Image } from "react-bootstrap";

export const ImageCover = ({ imageId }) => {
  const imageUrl = `https://covers.openlibrary.org/b/id/${imageId}-M.jpg`;
  return <Image src={imageUrl} alt="Book Cover" loading="lazy" />;
};
