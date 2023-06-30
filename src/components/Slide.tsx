import { useEffect, useState } from 'react';
import { API_ACCESS_TOKEN, BASE_URL, endPoints } from '../config/endpoints';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SlideData {
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const Slide = () => {
  const [movies, setMovies] = useState<any>([]);
  const [slideData, setSlideData] = useState<Array<SlideData>>([]);

  SwiperCore.use([Autoplay]);

  async function fetchData() {
    const request = await fetch(
      `${BASE_URL}${endPoints.fetchNetflixOriginals}${1}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        },
      },
    ).then((res) => res.json());
    setMovies(request.results);
  }

  const filterImage = () => {
    if (movies.length > 0) {
      const filtered = [...movies].map((item: any) => {
        return {
          backdrop_path: item.backdrop_path,
          id: item.id,
          title: item.title,
          overview: item.overview,
          poster_path: item.poster_path,
        };
      });
      setSlideData(filtered);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterImage();
  }, [movies]);

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {slideData.map((item: SlideData, index: number) => (
        <SwiperSlide key={index}>
          <section className="relative h-[100vh]">
            <div
              className="w-full h-[100vh] bg-cover bg-center brightness-50 object-cover transition duration-500"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
              }}
            />
            <div className="absolute top-1/3 ml-4 md:ml-16 w-8/12 left-0">
              <h1 className="text-white text-4xl md:text-5xl h-full w-full sm:w-[50%] lg:text-6xl font-bold drop-shadow-lg">
                {item.title}
              </h1>
              <p className="text-white truncate sm:whitespace-normal text-sm sm:text-base w-11/12 mt-4 sm:mt-6">
                {item.overview}
              </p>
              <div className="flex flex-row items-center mt-4 sm:mt-6 gap-4">
                <button className="bg-white rounded-md py-1 sm:py-2 px-2 sm:px-3 text-xs lg:text-lg font-semibold hover:bg-neutral-300 transition capitalize">
                  Play
                </button>
                <button className="capitalize bg-white text-white bg-opacity-30 rounded-md py-1 sm:py-2 px-2 sm:px-4 text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition">
                  More info
                </button>
              </div>
            </div>
            <div className="absolute hidden sm:flex top-1/3 right-0 mr-4 md:mr-16 w-2/12 rounded-md shadow-lg">
              <img
                className="w-full h-full object-contain rounded-md"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={`${item.title}`}
              />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
