import { Image } from "react-bootstrap";

export const ImageCover = ({ imageId, style }) => {
  const imageUrl = `https://covers.openlibrary.org/b/id/${imageId}-L.jpg`;
  return <Image src={imageUrl} alt="Book Cover" loading="lazy" style={style} />;
};
