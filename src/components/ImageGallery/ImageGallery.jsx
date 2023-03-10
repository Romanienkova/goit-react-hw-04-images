import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        const { id, tags } = image;

        return (
			  <ImageGalleryItem
				  
            key={id}
            image={image}
            toggleModal={toggleModal}
            alt={tags}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
