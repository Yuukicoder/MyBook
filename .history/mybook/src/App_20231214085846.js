import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'
import Option from './Option'
import News from './News';
 var App = () => 
(
    <div class="">
        <Navbar/>
        <div class="flex">
        <Option name="Yuuki-coder"/>
        <News/>
        <Contact/>
        </div>
        
    </div>
)

export default App;
