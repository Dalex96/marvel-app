import React from 'react';
import STATE from "../state/index"
import '../styles/css/style-layout.css'

class Header extends React.Component {

	state = {
		show: true,
		favo: true,
		search: "",
		url: ""
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({url:STATE.URL_COMIC})
		}, 2000);		
	}

	capValues = (e) =>{
		if(e.target.value !== ""){
			this.setState({
				search: e.target.value,
				show : false
			})	
		}else{
			this.setState({
				search: "",
				show : true
			})
			this.props.search()
		}
	}

	favorite = () => {
		this.setState({
			favo: this.state.favo ? false : true
		})
		this.props.fav(this.state.favo)
	}


	search_characters_name = async (e) => {
		e.preventDefault()
		this.props.search(this.state.search)
	}

	render(){
		return (
		  <nav className="grey lighten-5">
		      <ul className="nav-wrapper">
	        	<a href="/">
		        <li>
		    		<img id="imglogo" alt="descriptionmarvel4" src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Marvel.png" />

		        </li>
	    		</a>
		        {
		        	
				        this.state.url === "" ?
					        this.state.show ?
						        this.state.favo ?
						        <li className="icon-search ocultar-div">
							        <i className="material-icons prefix">search</i>
						        </li>
	        			     	:
			     				<li></li>
				        	:

					        <li className="icon-search">
					        </li>
					    :
				     	<li id="LiComicMarvel"><a id="urlComicMarvel" href={this.state.url} rel="noopener noreferrer" target="_blank">{this.state.url}</a> </li>


		    	}

		        <li>
		        {
			        this.state.favo ?
			        	this.state.url === "" ?
						<form className="col s12" autoComplete="off" onSubmit={this.search_characters_name}>
					        <div className="input-field col s12">
					          <input onChange={this.capValues} name="search" id="icon_prefix" type="text" className="input-field validate border" placeholder="Buscar"/>
					        </div>
					    </form>
					    :
				    	<p></p>
					:
					<p></p> 	
		        }
		        </li>
		        <li className="right">
		        		
				      	{
					      		this.state.favo ?
						        <a className="prefixHeader" href={() => false} onClick={this.favorite}><i className="medium material-icons">star_border</i></a>
						        :
						        <a className="prefixHeader" href={() => false} onClick={this.favorite}><i className="medium material-icons">star</i></a>
				      	}
			      		
		        </li>
		      </ul>
		  </nav>
		  
		)
	}
}

export default Header