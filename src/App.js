import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import About from './components/About'
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import Projects  from './components/Project';
import Blogs  from './components/Blogs';
function App() {
 
  return (
    <div className="App">
     
     <Router>
    <div className='bac'>
    
      
      <Navbar/> 

<div className='items '>
<Switch>
<Route exact path="/"> <Hero/></Route>
<Route path="/About"> <About/>  </Route>
<Route path="/Contact"> <ContactUs/>  </Route>
<Route path="/Project"> <Projects/>  </Route>
<Route path="/Blogs"> <Blogs/>  </Route>
 </Switch>
 
    
</div>
<Footer/>

</div>

        </Router>
 
  
    </div>
  );
}



      



export default App;
