import { SHOW_COMICS_CHARACTER, SHOW_COMIC, SHOW_COMIC_URL } from "../actionTypes";

const initialState = {
	comics_character: [],
	comic: [],
	comic_url: []
}

export function  comics_character(state = initialState, action){
	switch(action.type){
		case SHOW_COMICS_CHARACTER:
			return Object.assign({}, state, {comics_character: action.payload})
		case SHOW_COMIC:
			return Object.assign({}, state, {comic: action.payload})
		case SHOW_COMIC_URL:
			return Object.assign({}, state, {comic_url: action.payload})
		default: return state
	}
}

