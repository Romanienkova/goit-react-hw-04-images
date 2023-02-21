import PropTypes from 'prop-types';

import css from './Button.module.css';

export const Button = ({ handleLoadMore  }) => {
  return (
    <div className={css.Container}>
      <button className={css.Button} type="button" onClick={handleLoadMore }>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};