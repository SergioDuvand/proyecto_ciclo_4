import {Route, Link} from 'react-router-dom'
import './App.css';
import Compartir_receteta from './compartir_receta';


function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <ul>
          <li>
            <Link to='/'> Home </Link>
            <Link to='/login'> Login </Link>
            <Link to='/servicios'> Servicios </Link>
            <Link to='/noticias'> Noticias </Link>
            <Link to='/programadores'> Programadores </Link>
            <Link to='/compartir_receta'> Comparte tu receta </Link>
          </li>
        </ul>
      </nav>
     
        <Route exact path='/compartir_receta'>
          <Compartir_receteta/>
        </Route>
    
    </div>
  );
}

export default App;
