import React from 'react';
import "./style-layout.css"

class Header extends React.Component {

	state = {
		show: true,
		favo: true,
		search: ""
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
		    		<img alt="description of image" src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Marvel.png" width="70" 
		    		style={{
		    			marginTop: '12%', marginLeft:'10px', marginRight:'20px'

		    		}}/>

		        </li>
	    		</a>
		        {
		        this.state.show ?
			        <li className="icon-search">
				        <i className="material-icons prefix">search</i>
			        </li>
		        :

			        <li className="icon-search">
			        </li>		        
		    	}

		        <li>
					<form autocomplete="off" onSubmit={this.search_characters_name}>
				        <div className="input-field col s12">
				          <input onChange={this.capValues} name="search" id="icon_prefix" type="text" className="input-field validate border" placeholder="Buscar"/>
				        </div>
				    </form>
		        </li>
		        <li className="right">
				      <ul>
		        		<a onClick={this.favorite}>
				      	{
				      		this.state.favo ?
					        <li><i className="medium material-icons prefix">star_border</i></li>
					        :
					        <li><i className="medium material-icons prefix">star</i></li>
				      	}
			      		</a>
				      </ul>
		        </li>
		      </ul>
		  </nav>
		  
		)
	}
}

export default Header