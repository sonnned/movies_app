const SlideSkeleton = () => {
  return (
    <section className="relative h-[100vh]">
      <div className="animate-pulse bg-gray-800 h-[100vh] w-full" />
      <div className="absolute top-1/3 ml-4 md:ml-16 w-8/12 left-0">
        <h1 className="h-16 w-60 animate-pulse bg-gray-800 border-2 border-gray-700 rounded-md mb-6"></h1>
        <p className="h-52 w-full md:w-96 animate-pulse bg-gray-800 border-2 border-gray-700 rounded-md"></p>
        <div className="flex flex-row items-center mt-4 sm:mt-6 gap-4">
          <button className="h-10 w-20 animate-pulse bg-gray-800 border-2 border-gray-700 rounded-md"></button>
          <button className="h-10 w-20 animate-pulse bg-gray-800 border-2 border-gray-700 rounded-md"></button>
        </div>
      </div>
      <div className="absolute hidden sm:flex top-1/3 right-0 mr-4 md:mr-16 w-2/12 rounded-md shadow-lg">
        <div className="h-80 w-48 animate-pulse bg-gray-800 border-2 border-gray-700 rounded-md" />
      </div>
    </section>
  );
};

export default SlideSkeleton;
