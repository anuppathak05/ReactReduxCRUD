import { selectSong } from "../actions";
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrbs", duration: "4:05" },
    { title: "Coca Cola", duration: "4:05" },
    { title: "Firse machyange", duration: "4:05" },
    { title: "xyx", duration: "4:05" },
    { title: "xxxx", duration: "4:05" },
    { title: "zzzz", duration: "4:05" },
    { title: "zdfdsff", duration: "4:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
