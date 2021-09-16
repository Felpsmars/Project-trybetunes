import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import ProfileEdit from './pages/profileEdit';
import NotFound from './pages/notFound'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route component={ NotFound } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
