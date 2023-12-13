import './App.css';
var Navbar = () =>(


    <div class=" w-screen   bg-cyan-500">
    <div class="Navbar_icon ">
        <img class="w-10 h-10" src='iconMyBook.png' alt=""></img>
    </div>
    <div class="Navbar_search">
        <input class="rounded-xl" type="text" placeholder="Tìm kiếm trên MyBook"></input>
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
