import axios from 'axios'
import { 
	SHOW_CHARACTERS,
	SHOW_COMICS_CHARACTER,
	SHOW_COMIC,
	SEARCH_CHARACTERS_NAME
	 } from "./actionTypes";

const URL = "http://gateway.marvel.com/v1/public"

// const ts = '1597956652839'
// const apikey = 'd5b1719a579b94096ec9f3cbe43f1632'
// const hash = '1eb2a1a0be5fdec1e557ffd231a2c7b5'

const ts = '1598043415595'
const apikey = 'c30944b1d19b13bd57de590123c1c6db'
const hash = '8b6cd780009dac11f4cf25b6415b3632'

export function showCharacters(i){
	return (dispatch, getState) => {
		console.log("Cargando Personajes...")
		axios.get(`${URL}/characters`, {
				params:{
					'ts':ts,
					'apikey': apikey,
					'hash': hash,
					'limit':100,
					'offset':i
				}
			})
			.then((res) => {
				console.log("Personajes Cargados.")
				dispatch({
					type: SHOW_CHARACTERS,
					payload: res.data.data.results
				})
			})
	}
}

export function showComicsCharacter(id){
	return (dispatch, getState) => {
		console.log("Cargando Comics...")
		axios.get(`${URL}/characters/${id}/comics`, {
				params:{
					'ts':ts,
					'apikey': apikey,
					'hash': hash
				}
			})
			.then((res) => {
				console.log("Comics Cargados.")
				dispatch({
					type: SHOW_COMICS_CHARACTER,
					payload: res.data.data.results
				})
			})
	}
}

export function showComic(id){
	return (dispatch, getState) => {
		console.log("Cargando Comic...")
		axios.get(`${URL}/comics/${id}`, {
				params:{
					'ts':ts,
					'apikey': apikey,
					'hash': hash
				}
			})
			.then((res) => {
				console.log("Comic Cargado.")
				dispatch({
					type: SHOW_COMIC,
					payload: res.data.data.results
				})
			})
	}
}

export function searchCharacter(name){
	if(name){
	return (dispatch, getState) => {
		console.log("Cargando Personaje Buscado...")
		axios.get(`${URL}/characters`, {
				params:{
					'nameStartsWith':name,
					'ts':ts,
					'apikey': apikey,
					'hash': hash,
					'limit':100,
					'offset':0					
				}
			})
			.then((res) => {
				console.log("Cargado Personaje Buscado.")
				dispatch({
					type: SEARCH_CHARACTERS_NAME,
					payload: res.data.data.results
				})
			})
	}
	}else{
		return (dispatch, getState) => {
		console.log("Cargando Personajes...")
		axios.get(`${URL}/characters`, {
				params:{
					'ts':ts,
					'apikey': apikey,
					'hash': hash,
					'limit':100,
					'offset':0
				}
			})
			.then((res) => {
				console.log("Personajes Cargados.")
				dispatch({
					type: SEARCH_CHARACTERS_NAME,
					payload: res.data.data.results
				})
			})
	}
	}
}


