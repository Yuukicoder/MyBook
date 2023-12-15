var Story_Page = (x) => (
    <div class="">
        <div class="avatar">{x.avatar||`https://news.khangz.com/wp-content/uploads/2018/10/che-do-an-danh-chrome-1.png`}</div>
        <div class="author ">{x.author||"Ẩn danh"}</div>
    </div>
    )
var News = () =>(
    <div class="grid">
        <div class="News_Story ">
            <div class="Story_Page w-48">
                <Story_Page></Story_Page>
            </div>
        </div>
        <div class="News_Tools bg-red-600"></div>
        <div class="News_Page bg-blue-600"></div>
    </div>
    
)
export default News;