import React from 'react';
import '../pages/css/home.css';

var CommentsList=({comments})=>{

	return(
		<>
			<h3>Comentarios</h3>
			{comments.map((comment,index)=>(
				<div className="comentarios" key={index}>
					<label>{comment.userName} </label>
					<p>{comment.comment}</p>
				</div>	
			))}
		</>
	)
}

export default CommentsList