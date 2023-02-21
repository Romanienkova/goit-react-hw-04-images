import React, { useState, useEffect } from 'react';

import { getPictures } from 'serviсes/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

import css from './App.module.css';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchPictures = async () => {
      try {
        setIsLoading(true);
        const { totalHits, hits } = await getPictures(query, page);
        setImages(prevState => [...prevState, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPictures();
  }, [query, page, error]);

  const setKeyWord = keyWord => {
    setQuery(keyWord);
    setPage(1);
    setIsModalOpen(false);
    setModalData('');
    setShowLoadMore(false);
    setImages([]);
    setError(null);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
	};
	
	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

  const toggleModal = modalData => {
	  setModalData(modalData);
	  handleModal();
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={setKeyWord} />

      {isLoading && <Loader />}

      {images.length > 0 && (
        <ImageGallery images={images} toggleModal={toggleModal} />
      )}

      {showLoadMore && <Button handleLoadMore={handleLoadMore} />}

      {isModalOpen && <Modal modalData={modalData} handleModal={handleModal} />}
    </div>
  );
}
