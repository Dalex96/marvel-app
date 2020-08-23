import { SHOW_CHARACTERS, SEARCH_CHARACTERS_NAME } from "../actionTypes";

const initialState = {
	characters: [],
	search_characters: []
}

export function  characters(state = initialState, action){
	switch(action.type){
		case SHOW_CHARACTERS:
			return Object.assign({}, state, {characters: action.payload})
		case SEARCH_CHARACTERS_NAME:
			return Object.assign({}, state, {search_characters: action.payload})
		default: return state
	}
}

