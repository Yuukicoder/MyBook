import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

var Navbar = () =>(


    <div class="flex items-center justify-between  w-screen py-3 px-3  bg-cyan-500 shadow-lg shadow-gray-300">
        <div class="flex">

    <div class="Navbar_icon pr-3">
        <img class="w-10 h-10" src='iconMyBook.png' alt=""></img> 
    </div>
    <div class="Navbar_search h-10 bg-gray-200 rounded-3xl">
        <label class=" text-center h-full pl-6"for="">
    <i class="fa-solid fa-magnifying-glass text-gray-400" ></i>
        </label>

        <input class="rounded-3xl text-center h-full pr-6 bg-gray-200" type="text" placeholder="Tìm kiếm trên MyBook"></input>
        </div>

    </div>
    <div class="  Navbar_selection">
        <ul class="flex gap-20">
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
        <ul class="flex gap-4 items-center">
            <li><i class="fa-solid fa-bars"></i></li>
            <li><i class="fa-brands fa-rocketchat"></i></li>
            <li><i class="fa-solid fa-bell"></i></li>
            <li><div class="avatar"></div></li>
        </ul>
    </div>
    </div>
)
 var App = () => 
 <Navbar></Navbar>
export default App;
