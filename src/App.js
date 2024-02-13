import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Question from './Components/Question';
import Me from './Components/Me';
import Result from './Components/Result';
import Baby from './Components/Baby';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/me' Component={Me}/>
      <Route path='/baby' Component={Baby}/>
      <Route path='/Result' Component={Result}/>
      <Route path='/question' Component={Question}/>
    </Routes>  
   </Router>
  );
}

export default App;
