import { Action } from "@remix-run/router";

export default (state, Action) => {
    switch (Action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [Action.payload, ...state.watchlist],
            };
        // case "REMOVE_MOVIE_FROM_WATCHLIST":
        //     return {
        //         ...state,
        //         watchlist: state.watchlist.filter(
        //             (movie) => movie.id !== Action.payload
        //         ),
        //     };
        // case "ADD_MOVIE_TO_WATCHED":
        //     return {
        //         ...state,
        //         watched: [Action.payload, ...state.watched],
        //     };
        // case "MOVE_TO_WATCHLIST":
        //     return {
        //         ...state,
        //         watched: state.watched.filter(
        //             (movie) => movie.id !== Action.payload.id
        //         ),
        //         watchlist: [Action.payload, ...state.watchlist],
        //     };
        // case "REMOVE_FROM_WATCHED":
        //     return {
        //         ...state,
        //         watched: state.watched.filter(
        //             (movie) => movie.id !== Action.payload
        //         ),
        //     };
        default:
            return state;
    }
}