import "./css/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

var Navbar = () => (
  <div class="flex fixed z-10 bg-white items-center justify-between  w-screen  px-3  shadow-lg shadow-gray-300">
    <div class="flex pb-2 pt-2">
      <div class="Navbar_icon pr-3">
        <img class="w-10 h-10" src="iconMyBook.png" alt=""></img>
      </div>
      <div class="Navbar_search h-10 bg-gray-200 rounded-3xl">
        <label class=" text-center h-full pl-6" for="">
          <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
        </label>

        <input
          class="rounded-3xl text-center h-full pr-6 bg-gray-200"
          type="text"
          placeholder="Tìm kiếm trên MyBook"
        ></input>
      </div>
    </div>
    <div class=" mr-48 Navbar_selection ">
      <ul class="flex gap-10 ">
        <li>
          <div class="  border-b-4 border-blue-500">
            <i class="fa-solid fa-house  rounded-xl text-blue-500 py-3 px-12  text-2xl  "></i>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-store py-3  rounded-xl px-12 text-2xl hover:bg-gray-200 "></i>
        </li>
        <li>
          <i class="fa-solid fa-people-group py-3 rounded-xl px-12 text-2xl hover:bg-gray-200 "></i>
        </li>
      </ul>
    </div>
    <div class="Navbar_option pr-4 pb-2 pt-2">
      <ul class="flex gap-4 items-center">
        <li>
          <div class="avatar hover:bg-gray-300">
            <i class="fa-solid fa-bars "></i>
          </div>
        </li>
        <li>
          <div class="avatar hover:bg-gray-300">
            <i class="fa-brands fa-rocketchat"></i>
          </div>
        </li>
        <li>
          <div class="avatar hover:bg-gray-300">
            <i class="fa-solid fa-bell"></i>
          </div>
        </li>
        <li>
          <div class="avatar hover:bg-gray-300">
            <img class="avatar_img" src="Avatar.png" alt=""></img>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
export default Navbar;
