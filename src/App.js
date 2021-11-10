import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';

const H1Green = styled.h1`
  color: green;
  font-size: 20px;
`;

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <H1Green>Server-Side Rendering Example</H1Green>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>

      {isClient && (
        <p>
          <small>
            <i>Rendered by client</i>
          </small>
        </p>
      )}
    </>
  );
};

export default App;
