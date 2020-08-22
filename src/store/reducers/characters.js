import { SHOW_CHARACTERS } from "../actionTypes";

const initialState = {
	characters: []
}

export function  characters(state = initialState, action){
	switch(action.type){
		case SHOW_CHARACTERS:
			return Object.assign({}, state, {characters: action.payload})
		default: return state
	}
}

