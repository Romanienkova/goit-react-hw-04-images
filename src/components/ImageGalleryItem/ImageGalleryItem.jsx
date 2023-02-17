import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ element, toggleModal }) => {
  const { webformatURL, tags } = element;
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => toggleModal(element.largeImageURL)}
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
	element: PropTypes.object.isRequired,
	toggleModal: PropTypes.func.isRequired,
};