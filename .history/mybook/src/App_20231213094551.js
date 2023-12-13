import logo from './logo.svg';
import './App.css';

var News = x => 
<div>
    <div class="News_avatar">
        <img src={x.avatar} alt=""></img>
    </div>
    <div class="News_img">
        <img src={x.img} alt="" srcset=""></img>
    </div>
    <div class="News_author">
        <h2 style={{color: red;}}>{x.author || "Ẩn danh"}</h2>
    </div>
</div>
var App = () =>
<div class="">

<News avatar="https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0cm9uZ3xlbnwwfHwwfHx8MA%3D%3D" 
img="https://images.unsplash.com/photo-1523825086357-39d9158d4ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cm9uZ3xlbnwwfHwwfHx8MA%3D%3D" 
author="Yuuki"></News>
<News avatar="https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0cm9uZ3xlbnwwfHwwfHx8MA%3D%3D" 
img="https://images.unsplash.com/photo-1523825086357-39d9158d4ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cm9uZ3xlbnwwfHwwfHx8MA%3D%3D" 
author="Yuuki"></News>
<News avatar="https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0cm9uZ3xlbnwwfHwwfHx8MA%3D%3D" 
img="https://images.unsplash.com/photo-1523825086357-39d9158d4ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cm9uZ3xlbnwwfHwwfHx8MA%3D%3D" 
author="Yuuki"></News>
</div>
export default App;
