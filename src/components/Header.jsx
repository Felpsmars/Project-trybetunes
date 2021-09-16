import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: '',
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {
    const { name } = await getUser();
    this.setState({
      loading: false,
      name,
    });
  }

  render() {
    const { loading, name } = this.state;
    const loadingP = <p>Carregando...</p>;
    if (loading) return loadingP;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{ name }</p>
      </header>
    );
  }
}

export default Header;
