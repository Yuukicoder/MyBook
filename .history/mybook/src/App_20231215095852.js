import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'
import Option from './Option'
import News from './News';
import Friend_contact from './Friend_contact';
 var App = () => 
(
    <div class="">
        <Navbar/>
        <div class="flex justify-between">
        <Option name="Yuuki-coder"/>
        <News/>
        <Friend_contact/>
        </div>
        
    </div>
)

export default App;
