import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/MyBook_Home/Navbar";
import Option from "./components/MyBook_Home/Option";
import News from "./components/MyBook_Home/News";
import Friend_contact from "./components/MyBook_Home/Friend_contact";
var App = () => (
  <div class="">
    <Navbar />
    <div class="flex  justify-between">
      <Option name="Yuuki-coder" />
      <News />
      <Friend_contact />
    </div>
  </div>
);

export default App;
