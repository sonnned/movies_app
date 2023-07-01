import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <Fragment>
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
            path="movie/:id"
            element={<Movie />}
          />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
