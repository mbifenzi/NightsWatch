import React, { createContext, useContext } from "react";


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const GlobalContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
}


export const GlobalState = ({children}) => {
    const [movies, setMovies] = React.useState([]);
    const addToList = (movie) => {
        const oldMovies = [...movies];
        const newMovies = oldMovies.concat(movie);
        setMovies(newMovies);
    };
    const removeFromList = (movie) => {
        const oldMovies = [...movies];
        const newMovies = oldMovies.filter((m) => m.id !== movie.id);
        setMovies(newMovies);  
    };
    // const value = { movies, addToList, removeFromList };
  return (
    <GlobalContext.Provider value={ {movies, addToList, removeFromList} }>
      {children}
    </GlobalContext.Provider>
  );
}

