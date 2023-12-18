var Story_Page = (x) => (
    <div class=" w-44 h-72  rounded-2xl bg-green-600 relative overflow-hidden">
        <div class="avatar absolute right-0 left-0 top-0 mt-4 ml-4">
            <img class=" h-full w-full rounded-full " 
            src={x.avatar||"https://news.khangz.com/wp-content/uploads/2018/10/che-do-an-danh-chrome-1.png"} alt=""></img>
            </div>
            <div class="story">
                <img class="h-72 w-full object-cover " src={x.story} alt=""></img>
            </div>
            <div class="author absolute right-0 bottom-0 left-0 text-white font-semibold pl-4" >{x.author||"Ẩn danh"}</div>
    </div>
    )
var News = () =>(
    <div class="grid pt-4 gap-4 h-full">
        <div class="News_Story flex gap-3  ">
                <Story_Page
                 story="https://images.unsplash.com/photo-1702055894943-1f4012fbd991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"></Story_Page>
                <Story_Page
                story="https://images.unsplash.com/photo-1640132219022-e7a98b4c92e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                ></Story_Page>
                <Story_Page></Story_Page>
                <Story_Page></Story_Page>
       
        </div>
        <div class="News_Tools bg-white rounded-xl">
            <div class="bg-red-400">
                <div class="flex p-3 gap-2">
                    <div class="avatar"></div>
                    <input class="rounded-full bg-gray-200 w-full pl-3"type="text"  placeholder="Yuuki ơi, bạn đang nghĩ gì thế?"></input>
                </div>
                <div class="line"></div>
                <div class="tool ">
                    <ul class="flex">
                        <li><i class="fa-solid fa-video"></i></li>
                        <li><i class="fa-solid fa-photo-film"></i></li>
                        <li><i class="fa-regular fa-face-smile"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="News_Page bg-blue-600"></div>
    </div>
    
)
export default News;