var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var {MongoClient}=require("mongodb")

var database

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.post("/api/articles/:name/add-comments",async (req,res)=>{
	let {userId, userComment} = req.body
	let articleName=req.params.name

	try{
		let articleRequest=await database.collection("articules").update({id:articleName},{$push:{comments:{userName:userId,comment:userComment}}},(error,result)=>{
			if(!result) return res.status(404).send({mensaje:"No se ha encontrado el articulo"})
			return res.status(200).send({mensaje:"Todo salio bien",result:result})
		})
	}catch(error){
		res.status(500).send({error:error})
	}

})

app.get("/api/articles/:name",async (req,res)=>{
	let articleName=req.params.name
	try{
		let articleRequest = await database.collection("articules").findOne({id:articleName})
		res.status(200).json(articleRequest)
	
	}catch(error){
		res.status(500).send({error:error})
	}
})

app.put("/api/articles/:name/update-comment",async (req,res)=>{
	let articleName=req.params.name
	let {userId, userComment}=req.body

	try{
		let articleRequest= await database.collection("articules").updateOne({id:articleName,"comments.userName":userId},{$set:{"comments.$.comment":userComment}},(error,result)=>{
			if(!result) res.status(404).send({error:"No se ha encontrado el elemento"})
			return res.status(200).send({mensaje:"Comentario updateado",result:result})
		})
	}catch(error){
		res.status(500).send({error:error})
	}
})

app.listen(8080,()=>{
	console.log("Servidor establecido")

	MongoClient.connect("mongodb://localhost:27017/articulos",{useNewUrlParser:true},(error,result)=>{
		if(error) throw error

		database=result.db("articulos")
		console.log("Conexion a base de datos realizada")
	})

})