var Story_Page = (x) => (
    <div class="">
        <div class="avatar">
            <img class=" h-full w-full rounded-full" 
            src={x.avatar||"https://news.khangz.com/wp-content/uploads/2018/10/che-do-an-danh-chrome-1.png"} alt=""></img>
            </div>
            <div class="story">
                <img class="h-full" src="https://images.unsplash.com/photo-1682687980961-78fa83781450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt=""></img>
            </div>
        <div class="author ">{x.author||"Ẩn danh"}</div>
    </div>
    )
var News = () =>(
    <div class="grid">
        <div class="News_Story  ">
            <div class="Story_Page w-48 flex rounded-2xl items-center">
                <Story_Page></Story_Page>
                {/* <Story_Page></Story_Page>
                <Story_Page></Story_Page> */}
            </div>
        </div>
        <div class="News_Tools bg-red-600"></div>
        <div class="News_Page bg-blue-600"></div>
    </div>
    
)
export default News;