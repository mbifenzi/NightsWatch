import { useAppContext } from "../context/GlobalState";

const Watched = () => {
  return (
    <div className="w-full h-96 bg-red-700 bg-opacity-50">
      <div>
        <h1 className="w-full flex justify-center font-bold text-2xl">
          Watched
        </h1>
      </div>
    </div>
  );
};

const Watchlist = () => {
  const { movies, removeFromList } = useAppContext();
  // console.log(movies[0]);
  if (movies.length === 0) {
    return (
      <div className="w-full h-96 bg-slate-700 bg-opacity-50">
        <div>
          <h1 className="w-full flex justify-center font-bold text-2xl">
            Watchlist
          </h1>
          <div className="flex justify-center items-center ">
          <p>
            You have no movies in your watchlist. Add some from the search page.
          </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-fit bg-slate-700 bg-opacity-50">
      <div>
        <h1 className="w-full flex justify-center font-bold text-2xl">
          Watchlist
        </h1>
        {/* <h1></h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movies.map((movie) => (
            <div className="w-full h-fit bg-slate-700 bg-opacity-50 ">
              <div className="">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
                <h1>
                  {movie.title} ({movie.release_date})
                </h1>
                <div className="flex justify-center items-center">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => removeFromList(movie)}
                >
                  Remove
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Dahsboard = () => {
  return (
    <div>
      <Watched />
      <Watchlist />
    </div>
  );
};

export default Dahsboard;
