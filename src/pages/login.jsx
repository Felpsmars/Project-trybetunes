import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loading: false,
      loginState: false,
    };
  }

  handleCreateUser = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ loading: false, loginState: true });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  }

  render() {
    const minName = 3;
    const { name, loading, loginState } = this.state;
    const loadingP = <p>Carregando...</p>;
    if (loading) return loadingP;
    if (loginState) return (<Redirect to="/search" />);
    return (
      <div data-testid="page-login">
        <form action="">
          <label htmlFor="inputLogin">
            Name:
            <input
              type="text"
              data-testid="login-name-input"
              name="inputLogin"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length < minName }
            onClick={ this.handleCreateUser }
          >
            Entrar

          </button>

        </form>
      </div>
    );
  }
}

export default Login;
