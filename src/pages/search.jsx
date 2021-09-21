import React, { Component } from 'react';
import Header from '../components/Header';
import AlbumComp from '../components/AlbumComp';
import LoadingComp from '../components/LoadingComp';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      loading: false,
      artist: '',
    };
  }

  handleApiRequest = async () => {
    const { artist } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const albums = await searchAlbumsAPI(artist);
        this.setState({
          loading: false,
          artist: '',
          albums,
        });
      },
    );
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      name: value,
      artist: value,
    });
  }

  renderSearch = () => {
    const { artist } = this.state;
    const minLength = 2;
    return (
      <div className="artistSearch">
        <form className="artistForm">
          <input
            type="text"
            name="artist"
            data-testid="search-artist-input"
            onChange={ this.handleChange }
            value={ artist }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ artist.length < minLength }
            onClick={ this.handleApiRequest }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }

  albumRender = () => {
    const { albums, name } = this.state;
    if (!albums.length) {
      return (
        <p><strong>Nenhum álbum foi encontrado</strong></p>
      );
    }
    return (
      <div>
        <p>{`Resultado de álbuns de: ${name}`}</p>
        {albums.map((album) => (
          <AlbumComp key={ album.collectionId } albumInfo={ album } />
        ))}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        { loading ? <LoadingComp /> : this.renderSearch() }
        { loading ? <LoadingComp /> : this.albumRender() }
      </div>
    );
  }
}

export default Search;
