import { useParams } from 'react-router-dom';
import { BASE_URL, endPoints } from '../config/endpoints';
import { fetcher } from '../config/fetcher';
import { useEffect, useState } from 'react';

function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
}

const Movie = () => {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<any>({});

  async function fetchData() {
    const url = endPoints.fetchMovieDetail(id || '');
    const request = await fetcher(`${BASE_URL}${url}`);
    setMovie(request);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (movie.id) {
    return (
      <section className="relative h-full">
        <div className="h-[100vh] relative">
          <div
            className="w-full h-[100vh] bg-cover bg-center brightness-50 object-cover transition duration-500"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.belongs_to_collection?.backdrop_path || movie?.backdrop_path || movie?.poster_path})`,
            }}
          />
          <div className="absolute top-1/3 ml-4 md:ml-16 sm:w-1/2 left-0">
            <h1 className="text-white text-4xl md:text-5xl h-full w-full sm:w-[50%] lg:text-6xl font-bold drop-shadow-lg">
              {movie?.title}
            </h1>
            <div className="flex flex-row gap-5 py-4">
              {movie?.genres?.map((item: any) => (
                <span
                  className="text-gray-200 text-xs sm:text-base  font-semibold hover:underline cursor-pointer"
                  key={item.id}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-1/3 sm:top-1/3 ml-4 sm:mr-4 md:mr-16 w-1/2 sm:right-0 flex flex-col sm:items-end">
            <span className="flex flex-row gap-3">
              <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold drop-shadow-lg">
                Revenue:
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:underline cursor-pointer">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(movie?.revenue)}
              </p>
            </span>
            <span className="flex flex-row gap-3">
              <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold drop-shadow-lg">
                Runtime:
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:underline cursor-pointer">
                {toHoursAndMinutes(movie?.runtime)}
              </p>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-10">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg text-center">
            {movie?.tagline}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-bold underline">
            {new Date(movie.release_date).toLocaleString('en-US', {
              weekday: 'long',
              day: '2-digit',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="">
          <div className="flex flex-row flex-wrap gap-6 items-center justify-center mx-4 md:mx-16 py-5 px-3 bg-slate-800 rounded-md">
            {movie?.production_companies?.map((item: any) => (
              <div
                className="flex flex-col items-center justify-center gap-3"
                key={item.id}
              >
                {item.logo_path ? (
                  <img
                    className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    alt={item.name}
                  />
                ) : (
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gray-950 rounded-full animate-pulse" />
                )}
                <p className="text-white text-xs sm:text-base font-bold capitalize text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="m-4 md:m-16 py-5">
            <p
              className="
            text-white text-base sm:text-lg md:text-xl font-bold drop-shadow-lg break-words text-center"
            >
              {movie?.overview}
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return <section className="relative h-[100vh]">
    <div className="animate-pulse bg-gray-800 h-[100vh] w-full" />
  </section>
  }
};

export default Movie;
