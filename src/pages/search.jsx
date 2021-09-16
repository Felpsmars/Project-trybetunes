import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',

    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  }

  render() {
    const minName = 2;
    const { name } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <form className="artistForm">
            <input
              onChange={ this.handleChange }
              type="text"
              name="artist"
              data-testid="search-artist-input"
            />
            <button
              disabled={ name.length < minName }
              type="button"
              data-testid="search-artist-button"
            >
              Pesquisar
            </button>
          </form>
        </form>
      </div>
    );
  }
}

export default Search;
