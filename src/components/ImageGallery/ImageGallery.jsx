import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

const ImageGallery = ({ data, toggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(elem => {
        return (
          <ImageGalleryItem
            key={elem.id}
            element={elem}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};