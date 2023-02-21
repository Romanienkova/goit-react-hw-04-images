import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, toggleModal }) => {
  const {largeImageURL, webformatURL, tags } = image;
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => toggleModal(largeImageURL)}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.prototypes = {
	image: PropTypes.object.isRequired,
	toggleModal: PropTypes.func.isRequired,
};