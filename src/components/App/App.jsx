import "./App.css";
import { useState, useEffect } from "react";
import { fetchImages } from "../../articles-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import DotLoader from "react-spinners/DotLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";


export default function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true)
        const data = await fetchImages(query, page);
        setLoading(false);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  return (
    <div>
      <SearchBar onInput={handleSearch} />

      <DotLoader loading={loading} color="#01786F" size={50} />

      {error && <ErrorMessage />}

      {images.length > 0 && <ImageGallery items={images} />}

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

    </div>
  )
}
