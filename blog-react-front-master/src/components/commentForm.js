import React,{useState} from 'react'
import '../pages/css/home.css';

var CommentForm=({props})=>{
	var name=props
	const [userId,setUserId]=useState("")
	const [userComment,setUserComment]=useState("")

	var handleComment=async (e)=>{
		var commentRequest= await fetch(`http://localhost:8080/api/articles/${name}/add-comments`,{
			method:"POST",
			body:JSON.stringify({userId:userId,userComment:userComment}),
			headers:{
				"Content-Type":"application/json"
			}
		})
	}

	return(
		<>
			<h3>Añadir comentario</h3>
			<div >
				<form className="formulario">
					<input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}placeholder="Nombre" className=".en"/>
					<textarea value={userComment} onChange={(e)=>setUserComment(e.target.value)} placeholder="Comentario..." className=".en"></textarea>
					<button type="submit" onClick={(e)=>handleComment(e)} className=".en">Añadir comentario</button>
				</form>
			</div>
		</>
	)
}

export default CommentForm