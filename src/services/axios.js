import axios from 'axios'

const URL = "http://gateway.marvel.com/v1/public"

export function showCharacters(){
	axios.get(`${URL}/characters`, {
			params:{
				'ts':'1597956652839',
				'apikey': 'd5b1719a579b94096ec9f3cbe43f1632',
				'hash': '1eb2a1a0be5fdec1e557ffd231a2c7b5'
			}
		})
		.then((res) => {
			return res.data.data.results
		})
}