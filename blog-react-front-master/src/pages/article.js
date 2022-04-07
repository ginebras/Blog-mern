import React,{useState,useEffect} from 'react';
import './css/home.css';
import articlesContent from './articlesContent';
import Articles from '../components/articles';
import CommentsList from '../components/commentsList';
import CommentForm from '../components/commentForm';

console.disableYellowBox = true;

var Article=({match})=>{
	var name=match.params.name;
	var article=articlesContent.find(article=> article.name===name)

	const [articleInfo,setArticleInfo]=useState({comments:[]})

	useEffect(()=>{
		var fetchData=async ()=>{
			var result = await fetch(`http://localhost:8080/api/articles/${name}`)
			var body=await result.json()
			console.log(body)
			setArticleInfo(body)
		}

		fetchData()
	},[name])

	
	if (!article) return <h1 className="medio">El articulo no existe</h1>
	var otherArticles=articlesContent.filter(articles=> articles.name !== name)

	return (
		<>
			<div id="div1">
				<h1> {article.title} </h1>
				
				<p>{article.content} </p>
			
				<CommentsList comments={articleInfo.comments}/>
				<CommentForm props={name}/>
				<h3>Otros articulos</h3>
				<Articles articles={otherArticles} />
			</div>
		</>
	)
}

export default Article