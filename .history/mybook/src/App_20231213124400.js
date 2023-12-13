import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

var Navbar = () =>(


    <div class="flex items-center  w-screen   bg-cyan-500">
    <div class="Navbar_icon ">
        <img class="w-10 h-10" src='iconMyBook.png' alt=""></img> 
    </div>
    <div class="Navbar_search h-10 bg-white rounded-xl">
        <label class=" text-center h-full pl-6"for="">
    <i class="fa-solid fa-magnifying-glass text-gray-400" ></i>
        </label>

        <input class="rounded-xl text-center h-full pr-6" type="text" placeholder="Tìm kiếm trên MyBook"></input>
    </div>
    <div class="  Navbar_selection">
        <ul class="flex">
            <li>
            <i class="fa-solid fa-house"></i>
            </li>
            <li>
            <i class="fa-solid fa-store"></i>
            </li>
            <li> <i class="fa-solid fa-people-line"></i></li>
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
