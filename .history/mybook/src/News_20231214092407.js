var Story_Page = (x) => (
    <div class="">
        <div class="avatar">{x.avatar||"C:/Users/DOAN BINH AN/myBook/mybook/public/AnDanh.png"}</div>
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