import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumComp extends Component {
  render() {
    const { albumInfo: {
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
    } } = this.props;

    return (
      <div className="albumDisplay">
        <div className="linkAlbum">

          <Link
            data-testid={ `link-to-album-${collectionId}` }
            to={ `/album/${collectionId}` }
          >
            <img
              src={ artworkUrl100 }
              alt="Album cover"
            />
          </Link>
          <div className="albumInfo">
            <h4>{ artistName }</h4>
            <h5>{ collectionName }</h5>
          </div>
        </div>
      </div>
    );
  }
}

AlbumComp.propTypes = {
  albumInfo: PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  }).isRequired,
};
