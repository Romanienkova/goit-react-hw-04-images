import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { query } = this.state;
    this.props.setQuery(query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              <ImSearch />
            </span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};