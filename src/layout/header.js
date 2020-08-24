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
		    		<img alt="descriptionmarvel4" src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Marvel.png" width="70" 
		    		style={{
		    			marginTop: '12%', marginLeft:'10px', marginRight:'20px'

		    		}}/>

		        </li>
	    		</a>
		        {
			        this.state.url == "" ?
			        this.state.show ?
				        <li className="icon-search">
					        <i className="material-icons prefix">search</i>
				        </li>
			        :

				        <li className="icon-search">
				        </li>
				    :
				     <li><a href={this.state.url} target="_blank" style={{color:'black'}}>{this.state.url}</a> </li>

		    	}

		        <li>
		        {
		        	this.state.url == "" ?
					<form autoComplete="off" onSubmit={this.search_characters_name}>
				        <div className="input-field col s12">
				          <input onChange={this.capValues} name="search" id="icon_prefix" type="text" className="input-field validate border" placeholder="Buscar"/>
				        </div>
				    </form>
				    :
				    <p></p>
		        }
		        </li>
		        <li className="right">
		        		
				      	{
				      		!this.state.url == "" ?
					      		this.state.favo ?
						        <a onClick={this.favorite}><i className="medium material-icons prefix">star_border</i></a>
						        :
						        <a onClick={this.favorite}><i className="medium material-icons prefix">star</i></a>
				      		:
				      		<span></span>
				      	}
			      		
		        </li>
		      </ul>
		  </nav>
		  
		)
	}
}

export default Header