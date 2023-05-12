import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';

import About from './components/About';
import ContactUs from './components/Contact';
import Footer from './components/Footer';

function App() {
  // console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
     
     <Router>
    <div className='back'>
    
      
      <Navbar/> 

<div className='items '>
<Switch>
<Route exact path="/"> <Hero/></Route>
<Route path="/About"> <About/>  </Route>
<Route path="/Contact"> <ContactUs/>  </Route>


 </Switch>
 
    
</div>
<Footer/>

</div>

        </Router>
 
  
    </div>
  );
}



      



export default App;
