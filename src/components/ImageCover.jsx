import { Image } from "react-bootstrap";

export const ImageCover = ({ imageId, style }) => {
  const imageUrl = imageId
    ? `https://covers.openlibrary.org/b/id/${imageId}-L.jpg`
    : "https://5.imimg.com/data5/SELLER/Default/2023/6/314763290/WV/TA/PB/130736012/book-printing-services-500x500.png";
  return <Image src={imageUrl} alt="Book Cover" loading="lazy" style={style} />;
};
