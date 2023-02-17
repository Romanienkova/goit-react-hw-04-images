import React, { Component } from 'react';

import { getPictures } from '../serviсes/api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    query: null,
    isLoading: false,
    error: '',
    page: 1,
    isModalOpen: false,
    modalData: null,
    showLoadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      try {
        const { totalHits, hits } = await getPictures(query, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  setQuery = query => {
    this.setState({
      images: [],
      isModalOpen: false,
      query,
      isLoading: false,
      error: '',
      page: 1,
      showLoadMore: false,
      modalData: null,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = (modalData = null) => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalData,
    }));
  };

  render() {
    const { images, modalData, isModalOpen, isLoading, showLoadMore } =
      this.state;

    return (
      <div className={css.App}>
        <Searchbar setQuery={this.setQuery} />

        {isLoading && <Loader />}

        {images.length > 0 && (
          <ImageGallery data={images} toggleModal={this.toggleModal} />
        )}

        {showLoadMore && <Button handleLoadMore={this.handleLoadMore} />}

        {isModalOpen && (
          <Modal modalData={modalData} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}
