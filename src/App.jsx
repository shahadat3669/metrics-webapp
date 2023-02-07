import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Single from './pages/Single';
import NoMatch from './pages/NoMatch';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path="about"
        element={<Single />}
      />

      <Route
        path="*"
        element={<NoMatch />}
      />
    </Route>
  </Routes>
);

export default App;
