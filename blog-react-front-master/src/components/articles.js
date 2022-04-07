import React from 'react';
import {Link} from 'react-router-dom';
import '../pages/css/home.css';

var Articles=({articles})=>(
	<>
		{articles.map((content,index)=>(
			<div key={index} className="articulos">
				<Link to={`/article/${content.name}`} className="links"> 
					<img src={content.images} alt="blog"/>
					<h3>{content.title}</h3>
					<p>{content.content[0].substring(0,115)}... </p>
				</Link>
			</div>
		))}
	</>
)

export default Articles; 
