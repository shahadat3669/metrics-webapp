import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Country from './pages/Country';
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
        path="country/:id"
        element={<Country />}
      />

      <Route
        path="*"
        element={<NoMatch />}
      />
    </Route>
  </Routes>
);

export default App;
