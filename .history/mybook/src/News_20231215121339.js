import './News.css'
var Story_Page = (x) => (
    <div class=" w-44 h-72  rounded-2xl bg-green-600 relative overflow-hidden shadow-lg shadow-gray-300">
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
    var Page = (x) => (
        <div class="">
            <div class="flex gap-2">

            <div class="avatar"></div>
            <div class="grid ">

            <div class="page_author font-bold">
                {x.author}
            </div>
            <div class="page_time font-extralight text-sm">{x.time}</div>
            </div>
            </div>
            <div class="page_content  w-full">
                <p>{x.content}</p>
            </div>
            <div class="page_img"></div>
            <div class="page_contact"></div>
        </div>
    )
var News = () =>(
    <div class="grid pt-4 gap-4 h-full bg-black w-96">
        <div class="News_Story flex gap-3  ">
                <Story_Page
                 story="https://images.unsplash.com/photo-1702055894943-1f4012fbd991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"></Story_Page>
                <Story_Page
                story="https://images.unsplash.com/photo-1640132219022-e7a98b4c92e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                ></Story_Page>
                <Story_Page></Story_Page>
                <Story_Page></Story_Page>
       
        </div>
        <div class="News_Tools bg-white rounded-xl shadow-lg shadow-gray-300">
                <div class="flex p-3 gap-2">
                    <div class="avatar"></div>
                    <input class="rounded-full bg-gray-100 w-full pl-3 "type="text"  placeholder="Yuuki ơi, bạn đang nghĩ gì thế?"></input>
                </div>
                <div class="flex items-center justify-center">

                <div class="line2 "></div>
                </div>
                <div class="tool p-4">
                    <ul class="flex justify-between">
                        <li>
                            <div class="btn flex gap-2 items-center">
                            <i class="fa-solid fa-video text-red-500"></i>
                            <p class="font-bold text-gray-500">Video trực tiếp </p>
                            </div>
                            </li>
                        <li><div class="btn flex gap-2 items-center">
                            <i class="fa-solid fa-photo-film text-green-500"></i>
                            <p class="font-bold text-gray-500">Ảnh/video </p>
                            </div>
                            </li>
                        <li><div class="btn flex gap-2 items-center">
                            <i class="fa-regular fa-face-smile text-yellow-500"></i>
                            <p class="font-bold text-gray-500">Cảm xúc/hoạt động </p>
                            </div>
                            </li>
                    </ul>
                </div>
        </div>
        <div class="News_Page bg-white">
            <Page author="Yuuki" 
            time="1 giờ"></Page>
        </div>
    </div>
    
)
export default News;