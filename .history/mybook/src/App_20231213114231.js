import './App.css';
var Navbar = () =>(


    <div class=" w-screen   bg-cyan-500">
    <div class="Navbar_icon ">
        <img src='iconMyBook.png' alt=""></img>
    </div>
    <div class="Navbar_search">
        <input type="text" placeholder="Tìm kiếm trên MyBook">
    </div>
    <div class="Navbar_selection">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="Navbar_option"></div>
    </div>
)
 var App = () => 
 <Navbar></Navbar>
export default App;
