import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'
import Option from './Option'
import News from './News';
 var App = () => 
(
    <div class="">
        <Navbar/>
        <div class="flex justify-between">
        <Option name="Yuuki-coder"/>
        <News/>
        <Option name="Yuuki-coder"/>
        <div class="">

        <Friend_contact/>
        </div>
        </div>
        
    </div>
)

export default App;
