import './App.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
var Navbar = () =>(


    <div class=" w-screen   bg-cyan-500">
    <div class="Navbar_icon ">
        <img class="w-10 h-10" src='iconMyBook.png' alt=""></img>
    </div>
    <div class="Navbar_search">
        <input class="rounded-xl text-center a-solid fa-magnifying-glass" type="text" placeholder="Tìm kiếm trên MyBook"></input>
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
    </div>
    <div class="Navbar_selection">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="Navbar_option">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </div>
)
 var App = () => 
 <Navbar></Navbar>
export default App;
