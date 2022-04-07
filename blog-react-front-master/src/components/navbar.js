import React from 'react';
import {Link} from 'react-router-dom';

var Navbar=()=>{
	return(
		<nav>
			<ul>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/article">
						Articulos
					</Link>
				</li>
				<li>	
					<Link to="/articlesList">
						Lista de articulos
					</Link>
				</li>
				<li>	
					<Link to="/about">
						Sobre mi
					</Link>
				</li>
			</ul>
		</nav>
	)
}	

export default Navbar