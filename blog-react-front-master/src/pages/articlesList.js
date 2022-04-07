import React from 'react';
import './css/home.css';
import articlesContent from './articlesContent';
import Articles from '../components/articles';

var Articleslist=()=>{
	return (
		<div id="div2">
			<h1> Estos son los articulos</h1>

			<Articles articles={articlesContent} />
		</div>
	)
}

export default Articleslist