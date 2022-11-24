import './App.css';

//Axios
import axios from 'axios';

//Routing
import { Routes , Route } from 'react-router-dom';

//Pages
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import Plays from './Pages/Plays';

// REACT-SLICK-css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage  />}/>
        <Route path='/movie/:id' element={<MoviePage />}/>
        <Route path='/plays' element={<Plays />}/>
      </Routes>
    </>
  );
}

export default App;
