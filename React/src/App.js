//import logo from './logo.svg';
import './App.css';

import { Film } from './FilmSrc/Film';
import { Recommendation } from './RecommendationSrc/Recommendation';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className='m-3 d-flex justify-content-center'>
          Film catalog
        </h3>
        <Navigation />

        <Routes>
          
          <Route path='/' element={<Film/>} />
          <Route path='/recommendation' element={<Recommendation/>} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
