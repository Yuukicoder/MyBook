var Story_Page = (x) => (
    <div class=" w-48 h-auto  rounded-2xl bg-green-600">
        <div class="avatar">
            <img class=" h-full w-full rounded-full" 
            src={x.avatar||"https://news.khangz.com/wp-content/uploads/2018/10/che-do-an-danh-chrome-1.png"} alt=""></img>
            </div>
            <div class="story">
                <img class="h-full" src={x.story} alt=""></img>
            </div>
        <div class="author ">{x.author||"Ẩn danh"}</div>
    </div>
    )
var News = () =>(
    <div class="grid">
        <div class="News_Story flex gap-3">
                <Story_Page></Story_Page>
                <Story_Page></Story_Page>
                <Story_Page></Story_Page>
                <Story_Page></Story_Page>
       
        </div>
        <div class="News_Tools bg-red-600"></div>
        <div class="News_Page bg-blue-600"></div>
    </div>
    
)
export default News;