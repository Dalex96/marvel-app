import axios from 'axios'
import { 
	SHOW_CHARACTERS,
	SHOW_COMICS_CHARACTER,
	SHOW_COMIC,
	SEARCH_CHARACTERS_NAME,
	SHOW_COMIC_URL
	 } from "./actionTypes";
const md5 = require('md5');

const URL = "http://gateway.marvel.com/v1/public"

const ts = Date.now()
const apikey = 'c30944b1d19b13bd57de590123c1c6db'
const apikeyPrivate = 'dd9fd9d352259059b44c0dab0d207725290a86c0'
const hash = md5(`${ts}${apikeyPrivate}${apikey}`)


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


export function showComicURL(url){
	return (dispatch, getState) => {
		axios.get(url, {
			    headers: { 
			      	'Access-Control-Allow-Origin': '*'
			    }
			})
			.then((res) => {
				// const extractScriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gmi;
				// let scriptsExtracted;
				// let innerHtml = res.data;
				// scriptsExtracted = extractScriptRegex.exec(res.data)
				// while(scriptsExtracted) {
				// 	innerHtml = innerHtml.replace(scriptsExtracted[0], '');
				// 	window.eval(scriptsExtracted[1]);
				// }
				dispatch({
					type: SHOW_COMIC_URL,
					payload: {}
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


