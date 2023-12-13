import './App.css';
var Navbar = () =>(


    <div class=" w-screen   bg-cyan-500">
    <div class="Navbar_icon ">
        <img src='iconMyBook.png' alt=""></img>
    </div>
    <div class="Navbar_search">
        <input type="text" placeholder="Tìm kiếm trên MyBook">
    </div>
    <div class="Navbar_selection"></div>
    <div class="Navbar_option"></div>
    </div>
)
 var App = () => 
 <Navbar></Navbar>
export default App;
