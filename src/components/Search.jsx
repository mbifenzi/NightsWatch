import React from "react";
import { Link } from "react-router-dom";
import {  useEffect } from "react";
import axios from "axios";


const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);



  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=003cf2a5664bc20ad532284afd14e356&language=en-US&query=${searchTerm}&page=1&include_adult=false`
        );
        
        setSearchResults(res.data.results);
        setIsLoading(false);
    };
    fetchSearchResults();
  }, [searchTerm]);

  return (
      <div className="search" id="search">
        {/* <SecHeader /> */}
        <div className="w-full h-fit bg-[#4a070a]">
          <div className="container mx-auto px-4 pt-6 text-center">
            <div className="search-movies">
                <div className="mt-8 w-full rounded-full">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    className="bg-black/50 text-white text-center w-1/2 rounded-full  p-2 m-2 border-red-700 border-2"
                  />
                </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
                {isLoading ? (
                  <div className="text-white text-2xl">Loading... waa3</div>
                ) : (
                  searchResults.map((movie) => (
                    <div key={movie.id} className="mt-8">
                      <Link to={`/${movie.id}`} state={{ movie: movie }}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="hover:opacity-75 transition ease-in-out duration-150"
                        />
                      </Link>
                      <h2 className=" text-slate-300 bg-slate-600 hover:opacity-75">
                        {movie.title}
                      </h2>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Search;
