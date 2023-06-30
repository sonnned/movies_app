import { FC } from 'react';

interface ListProps {
  movies: any[];
  title: string;
}

const List: FC<ListProps> = ({ movies, title }) => {
  return (
    <div className="flex flex-col my-10 sm:my-20">
      <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4 capitalize">
        {title}
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4
  "
      >
        {movies.map((movie: any) => (
          <div
            className="bg-zinc-900 col-span relative h-full rounded-md group"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="cursor-pointer object-cover transition duration-500 shadow-xl rounded-md group-hover:opacity-40 w-full h-full"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-md hidden group-hover:flex flex-col items-center justify-around">
              <h2 className="text-white text-center text-2xl font-semibold pt-2">
                {movie.title}
              </h2>
              <p className="text-white text-center text-sm font-semibold">
                {new Date(movie.release_date).toLocaleString('en-US', {
                  weekday: 'long',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </p>
              <div
                className="
          flex flex-row items-center justify-center
          "
              >
                <button className="bg-zinc-700 text-white text-sm font-semibold px-4 py-2 rounded-md mt-2">
                  Watch
                </button>
                <button className="bg-zinc-700 text-white text-sm font-semibold px-4 py-2 rounded-md mt-2 ml-2">
                  Add to list
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
