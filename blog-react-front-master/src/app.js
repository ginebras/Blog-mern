import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//PAGINAS
import Home from './pages/home.js';
import Articleslist from './pages/articlesList.js';
import Article from './pages/article.js';
import About from './pages/about.js';
import NotFound from './pages/notfound';

//COMPONENTES
import Navbar from './components/navbar';

var App=()=>{
	return(
		<Router>
			<Navbar />
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path="/about" component={About}/>
					<Route exact path="/articlesList" component={Articleslist}/>
					<Route exact path="/article/:name" component={Article}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>
	)
}

export default App;