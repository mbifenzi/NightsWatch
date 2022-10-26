import React from "react";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import Search from "./Search";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=003cf2a5664bc20ad532284afd14e356&language=en-US&page=1`
      );
      setTrending(res.data.results);
      //   setIsLoading(false);
    };
    fetchTrending();
  }, []);

  return (
    <div className="w-full h-fit bg-[#4a070a]">
      <div className="container text-center mx-auto px-4 pt-16 transition-opacity duration-500">
        <div className="popular-movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {trending.slice(0, 10).map((movie) => (
              <div key={movie.id} className="mt-8">
                <Link to={`/${movie.id}`} state={{ movie: movie }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="hover:opacity-75 transition ease-in-out duration-150"
                  />
                <h2 className=" text-slate-300 bg-slate-600 hover:opacity-75">{movie.media_type}</h2>
                </Link>
                <div className="mt-2">
                  <Link
                    to={`/${movie.id}`}
                    className="text-lg mt-2 hover:text-gray:300 text-white"
                  >
                    {movie.title}
                  </Link>
                  <div className="flex justify-center items-center text-gray-400 text-sm mt-1">
                    <svg
                      className="fill-current text-orange-500 w-4"
                      viewBox="0 0 24 24"
                    >
                      <g data-name="Layer 2">
                        <path
                          d="M12 2a10 10 0 0 0-3.54 19.54 1 1 0 0 0 1.42-1.42A8 8 0 1 1 12 4a7.93 7.93 0 0 1 5.13 1.88 1 1 0 0 0 1.4-1.43A10 10 0 0 0 12 2z"
                          data-name="star"
                        />
                      </g>
                    </svg>
                    <span className="ml-1">{movie.vote_average}</span>
                    <span className="mx-2">|</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{movie.overview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Popular = () => {
  const [popular, setPopular] = React.useState([]);
  //   const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=003cf2a5664bc20ad532284afd14e356&language=en-US&page=1`
      );
      setPopular(res.data.results);
      //   setIsLoading(false);
    };
    fetchPopular();
  }, []);
  return (
    <div className="w-full h-fit bg-[#4a070a]">
      <div className="container mx-auto px-4 pt-16 text-center">
        <div className="popular-movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {popular.slice(0, 10).map((movie) => (
              <div key={movie.id} className="mt-8">
                <Link to={`/${movie.id}`} state={{ movie: movie }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="hover:opacity-75 transition ease-in-out duration-150"
                  />
                  <h2 className=" text-slate-300 bg-slate-600 hover:opacity-75 hover:text-black">movie</h2>
                </Link>
                <div className="mt-2">
                  <Link
                    to={`/${movie.id}`}
                    className="text-lg mt-2 hover:text-gray:300 text-white"
                  >
                    {movie.title}
                  </Link>

                  <div className="flex justify-center items-center text-gray-400 text-sm mt-1">
                    <svg
                      className="fill-current text-orange-500 w-4"
                      viewBox="0 0 24 24"
                    >
                      <g data-name="Layer 2">
                        <path
                          d="M12 2a10 10 0 0 0-3.54 19.54 1 1 0 0 0 1.42-1.42A8 8 0 1 1 12 4a7.93 7.93 0 0 1 5.13 1.88 1 1 0 0 0 1.4-1.43A10 10 0 0 0 12 2z"
                          data-name="star"
                        />
                      </g>
                    </svg>
                    <span className="ml-1">{movie.vote_average}</span>
                    <span className="mx-2">|</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{movie.overview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopRated = () => {
  const [topRated, setTopRated] = React.useState([]);
  //   const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchTopRated = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=003cf2a5664bc20ad532284afd14e356&language=en-US&page=1`
      );
      setTopRated(res.data.results);
      //   setIsLoading(false);
    };
    fetchTopRated();
  }, []);
  console.log(topRated);
  return (
    <div className="w-full h-fit bg-[#4a070a]">
      <div className="container mx-auto px-4 pt-16 text-center">
        <div className="top-rated-movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {topRated.slice(0, 10).map((movie) => (
              <div key={movie.id} className="mt-8">
                <Link to={`/${movie.id}`} state={{ movie: movie }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="hover:opacity-75 transition ease-in-out duration-150"
                  />
                  <h2 className=" text-slate-300 bg-slate-600 hover:opacity-75">tv</h2>
                </Link>

                <div className="mt-2">
                  <Link
                    to={`/${movie.id}`}
                    className="text-lg mt-2 hover:text-gray:300 text-white"
                  >
                    {movie.title}
                  </Link>
                  <div className="flex justify-center items-center text-gray-400 text-sm mt-1">
                    <svg
                      className="fill-current text-orange-500 w-4"
                      viewBox="0 0 24 24"
                    >
                      <g data-name="Layer 2">
                        <path
                          d="M12 2a10 10 0 0 0-3.54 19.54 1 1 0 0 0 1.42-1.42A8 8 0 1 1 12 4a7.93 7.93 0 0 1 5.13 1.88 1 1 0 0 0 1.4-1.43A10 10 0 0 0 12 2z"
                          data-name="star"
                        />
                      </g>
                    </svg>
                    <span className="ml-1">{movie.vote_average}</span>
                    <span className="mx-2">|</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{movie.overview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Movie = () => {
  const location = useLocation();
  const movie = location.state.movie;
//   console.log(movie);

  return (
    <div className="w-full h-fit bg-[#4a070a]">
      <div className="container mx-auto px-4 pt-16 ">
        <div className="text-center lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className=" movie-poster w-full flex justify-center align-middle content-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="movie-info">
            <h2 className="text-4xl font-bold p-2 text-white">{movie.title}</h2>
            <div className="flex justify-center items-center text-gray-400 text-sm">
              <svg
                className="text-center fill-current text-orange-500 w-4"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <path
                    d="M12 2a10 10 0 0 0-3.54 19.54 1 1 0 0 0 1.42-1.42A8 8 0 1 1 12 4a7.93 7.93 0 0 1 5.13 1.88 1 1 0 0 0 1.4-1.43A10 10 0 0 0 12 2z"
                    data-name="star"
                  />
                </g>
              </svg>
              <span className="ml-1 ">{movie.vote_average}</span>
              <span className="mx-2">|</span>
              <span>{movie.release_date}</span>
            </div>
            <p className="text-gray-300 mt-8 pb-10">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};




const Content = () => {
    // const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      {/* <Router> */}
        <div className="bg-[#4a070a] h-screen" id="search">
          <div className="flex justify-center text-lg md:text-2xl lg:text-5xl  text-white  ">
            <NavLink
              to="/trending"
              className="bg-black bg-opacity-30 p-4 hover:bg-black cursor-pointer transition duration-300"
            >
              Trending
            </NavLink>
            <NavLink
              to="/popular"

              className="bg-black bg-opacity-30 p-4 hover:bg-black cursor-pointer transition duration-300"
              
              
          
            >
              Popular
            </NavLink>
            <NavLink
              to="/toprated"
              className="bg-black bg-opacity-30 p-4 hover:bg-black cursor-pointer transition duration-300"
            >
              Top Rated
            </NavLink>
          </div>
            
          <Routes>
            <Route path="/" element={<Search/>} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/:id" element={<Movie />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/popular/:id" element={<Movie />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/toprated/:id" element={<Movie />} />
            <Route path="/search" element={<> <Search /> </>} />
          </Routes>
        </div>

    </>
  );
};

export default Content;
