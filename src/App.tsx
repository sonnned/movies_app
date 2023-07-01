import { Fragment, useEffect, useState } from 'react';
import { BASE_URL, endPoints } from './config/endpoints';
import { fetcher } from './config/fetcher';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import List from './components/List';
import ListSkeleton from './components/ListSkeleton';

const arraySkeleton = new Array(9).fill(0);

function App() {
  const [actionMovies, setActionMovies] = useState<any>([]);
  const [comedyMovies, setComedyMovies] = useState<any>([]);

  useEffect(() => {
    async function fetchActionData() {
      const request = await fetcher(
        `${BASE_URL}${endPoints.fetchActionMovies}${1}`,
      );
      setActionMovies(request.results);
    }

    async function fetchComedyData() {
      const request = await fetcher(
        `${BASE_URL}${endPoints.fetchComedyMovies}${1}`,
      );
      setComedyMovies(request.results);
    }

    fetchActionData();
    fetchComedyData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Slide />
      <div className="mx-4 sm:mx-16 pb-2 sm:pb-4">
        {actionMovies.length ? (
          <List
            movies={actionMovies}
            title="Action Movies"
          />
        ) : (
          <ListSkeleton arr={arraySkeleton} />
        )}
        {comedyMovies.length ? (
          <List
            movies={comedyMovies}
            title="Comedy Movies"
          />
        ) : (
          <ListSkeleton arr={arraySkeleton} />
        )}
      </div>
    </Fragment>
  );
}

export default App;
