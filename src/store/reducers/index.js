import { combineReducers } from "redux";
import { characters } from "./characters";
import { comics_character } from "./comics";

export default combineReducers({ 
	characters: characters,
	comics: comics_character
});