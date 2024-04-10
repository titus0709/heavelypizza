
import './app.css';
import Navbar from './components/navbar';
import Footer from './components/footer';


import{BrowserRouter as Router,Route,Routes,} from 'react-router-dom'

import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';

function App() {
  return (
    
    <div className="app">
      
     <Router>
     <Navbar/>
     <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/menu' exact Component={Menu}/>
      <Route path='/about' exact Component={About}/>
      <Route path='/contact' exact Component={Contact}/>
     </Routes>
     <Footer/>
     </Router>
     
    </div>
    
  );
}

export default App;
