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
    setImages([]);
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

      {error && <ErrorMessage />}

      {images.length > 0 && <ImageGallery items={images} />}
      
      <DotLoader loading={loading} color="#01786F" size={50} />

      {images.length > 0 && !loading && (<LoadMoreBtn onClick={handleLoadMore} />)}

    </div>
  )
}
