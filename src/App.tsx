import { Fragment, useEffect, useState } from 'react';
import { API_ACCESS_TOKEN, BASE_URL, endPoints } from './config/fetcher';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import List from './components/List';
function App() {
  const [actionMovies, setActionMovies] = useState<any>([]);
  const [comedyMovies, setComedyMovies] = useState<any>([]);

  useEffect(() => {
    async function fetchActionData() {
      const request = await fetch(
        `${BASE_URL}${endPoints.fetchActionMovies}${1}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
          },
        },
      ).then((res) => res.json());
      setActionMovies(request.results);
    }

    async function fetchComedyData() {
      const request = await fetch(
        `${BASE_URL}${endPoints.fetchComedyMovies}${1}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
          },
        },
      ).then((res) => res.json());
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
        <List movies={actionMovies} title="Action Movies" />
        <List movies={comedyMovies} title="Comedy Movies" />
      </div>
    </Fragment>
  );
}

export default App;
