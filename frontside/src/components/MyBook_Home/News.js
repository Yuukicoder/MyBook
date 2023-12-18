import "./css/News.css";
var Story_Page = (x) => (
  <div class=" w-40 h-72 mt-20 rounded-2xl bg-green-600 relative overflow-hidden shadow-lg shadow-gray-300">
    <div class="avatar absolute right-0 left-0 top-0 mt-4 ml-4">
      <img
        class=" avatar_img "
        src={
          x.avatar ||
          "https://news.khangz.com/wp-content/uploads/2018/10/che-do-an-danh-chrome-1.png"
        }
        alt=""
      ></img>
    </div>
    <div class="story">
      <img class="h-72 w-full object-cover " src={x.story} alt=""></img>
    </div>
    <div class="author absolute right-0 bottom-0 left-0 text-white font-semibold pl-4">
      {x.author || "Ẩn danh"}
    </div>
  </div>
);
var Page = (x) => (
  <div class="p-4 rounded-xl bg-white shadow-lg shadow-gray-300">
    <div class="flex gap-2">
      <div class="avatar ">
        <img class="avatar_img" src={x.avatar} alt=""></img>
      </div>
      <div class="grid ">
        <div class="page_author font-bold">{x.author}</div>
        <div class="page_time font-extralight text-sm">{x.time}</div>
      </div>
    </div>
    <div class="page_content  ">
      <p class="">{x.content}</p>
    </div>
    <div class="page_img w-full">
      <img class="w-full h-96" src={x.image} alt=""></img>
    </div>
    <div class="page_contact pt-4 grid gap-3">
      <div class="flex justify-between text-gray-500">
        <div class="contact_emotion flex gap-2">
          <div class="">
            <i class="fa-solid fa-heart text-lg text-red-500"></i>
            <i class="fa-solid fa-thumbs-up text-lg text-blue-500"></i>
            <i class="fa-solid fa-face-laugh-squint text-lg text-yellow-500"></i>
          </div>
          {x.emotion_number}
        </div>
        <div class="flex gap-4">
          <div class="contact_commend">{x.commend_number} bình luận</div>
          <div class="contact_share">{x.share_number} lượt chia sẻ</div>
        </div>
      </div>
      <div class="line3"></div>
      <div class="flex justify-between px-10 text-gray-500">
        <div class="like flex gap-2 text-base hover:bg-gray-200 py-1 px-10 rounded-md">
          <i class="fa-regular fa-thumbs-up text-2xl "></i>
          <p>Thích</p>
        </div>
        <div class="commend flex gap-2 text-base hover:bg-gray-200 py-1 px-10 rounded-md ">
          <i class="fa-regular fa-comment text-2xl"></i>
          <p>Bình luận</p>
        </div>
        <div class="share flex gap-2 text-base hover:bg-gray-200 py-1 px-10 rounded-md ">
          <i class="fa-solid fa-share text-2xl"></i>
          <p>Chia sẻ</p>
        </div>
      </div>
    </div>
  </div>
);
var News = () => (
  <div class="grid pt-4 gap-4 h-full News_scroll ">
    <div class="News_Story flex gap-3  ">
  <div class=" w-40 h-72 mt-20 rounded-2xl bg-white relative overflow-hidden shadow-lg shadow-gray-300">
  <div class="avatar_img">
  <img class="h-56   w-full object-cover " src="Avatar.png" alt=""></img>

  </div>
  <div class="absolute   text-center w-full top-52 ">
  <i class="fa-solid fa-circle-plus text-3xl text-blue-500 border-4 border-white rounded-full"></i>
  </div>
  <div class=" absolute  bottom-0 text-center w-full  text-black font-semibold ">
    Tạo tin
  </div>
</div>
      <Story_Page
        avatar="https://cdn.popsww.com/blog/sites/2/2022/12/nam-anime-dep-trai.jpg"
        story="https://images.unsplash.com/photo-1702055894943-1f4012fbd991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
        author="Trai Alime"
      ></Story_Page>
 
      <Story_Page story="https://images.unsplash.com/photo-1640132219022-e7a98b4c92e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"></Story_Page>
      <Story_Page
        avatar="https://inkythuatso.com/uploads/images/2022/05/meo-khoc-nhu-nguoi-11-08-54-28.jpg"
        story="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        author="P*ssy cat"
      ></Story_Page>
    </div>
    <div class="News_Tools bg-white rounded-xl shadow-lg shadow-gray-300">
      <div class="flex p-3 gap-2">
        <div class="avatar">
          <img class="avatar_img" src="Avatar.png" alt=""></img>
        </div>
        <input
          class="rounded-full bg-gray-100 w-full pl-3 hover:bg-gray-200"
          type="text"
          placeholder="Yuuki ơi, bạn đang nghĩ gì thế?"
        ></input>
      </div>
      <div class="flex items-center justify-center">
        <div class="line2 "></div>
      </div>
      <div class="tool p-4">
        <ul class="flex justify-between">
          <li>
            <div class="btn flex gap-2 items-center hover:bg-gray-200 px-2 py-1 rounded-lg">
              <i class="fa-solid fa-video text-red-500"></i>
              <p class="font-bold text-gray-500">Video trực tiếp </p>
            </div>
          </li>
          <li>
            <div class="btn flex gap-2 items-center hover:bg-gray-200 px-2 py-1 rounded-lg">
              <i class="fa-solid fa-photo-film text-green-500"></i>
              <p class="font-bold text-gray-500">Ảnh/video </p>
            </div>
          </li>
          <li>
            <div class="btn flex gap-2 items-center hover:bg-gray-200 px-2 py-1 rounded-lg">
              <i class="fa-regular fa-face-smile text-yellow-500"></i>
              <p class="font-bold text-gray-500">Cảm xúc/hoạt động </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="News_Page grid gap-4">
      <Page
        author="Yuuki"
        time="1 giờ"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore. Accusantium, sit! Exercitationem odio numquam veritatis harum necessitatibus tenetur illum facilis deleniti aliquam sit fuga beatae soluta, vero non quidem?
            Ut officia quo excepturi modi aperiam esse, quisquam obcaecati magnam rem, quasi alias, unde architecto provident. Incidunt sint maxime facere commodi consequatur, qui enim nulla eius, beatae dicta quos vitae!"
        image="https://plus.unsplash.com/premium_photo-1701185651795-08c2f59bc005?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        emotion_number="35K"
        commend_number="184K"
        share_number="128"
        avatar="Avatar.png"
      ></Page>
      
      <Page
        author="Yuuki"
        time="1 giờ"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore. Accusantium, sit! Exercitationem odio numquam veritatis harum necessitatibus tenetur illum facilis deleniti aliquam sit fuga beatae soluta, vero non quidem?
            Ut officia quo excepturi modi aperiam esse, quisquam obcaecati magnam rem, quasi alias, unde architecto provident. Incidunt sint maxime facere commodi consequatur, qui enim nulla eius, beatae dicta quos vitae!"
        image="https://plus.unsplash.com/premium_photo-1701185651795-08c2f59bc005?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        emotion_number="35K"
        commend_number="184K"
        share_number="128"
        avatar="Avatar.png"

      ></Page>
      <Page
        author="Yuuki"
        time="1 giờ"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore. Accusantium, sit! Exercitationem odio numquam veritatis harum necessitatibus tenetur illum facilis deleniti aliquam sit fuga beatae soluta, vero non quidem?
            Ut officia quo excepturi modi aperiam esse, quisquam obcaecati magnam rem, quasi alias, unde architecto provident. Incidunt sint maxime facere commodi consequatur, qui enim nulla eius, beatae dicta quos vitae!"
        image="https://plus.unsplash.com/premium_photo-1701185651795-08c2f59bc005?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        emotion_number="35K"
        commend_number="184K"
        share_number="128"
        avatar="Avatar.png"

      ></Page>
      <Page
        author="Yuuki"
        time="1 giờ"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore. Accusantium, sit! Exercitationem odio numquam veritatis harum necessitatibus tenetur illum facilis deleniti aliquam sit fuga beatae soluta, vero non quidem?
            Ut officia quo excepturi modi aperiam esse, quisquam obcaecati magnam rem, quasi alias, unde architecto provident. Incidunt sint maxime facere commodi consequatur, qui enim nulla eius, beatae dicta quos vitae!"
        image="https://plus.unsplash.com/premium_photo-1701185651795-08c2f59bc005?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        emotion_number="35K"
        commend_number="184K"
        share_number="128"
        avatar="Avatar.png"

      ></Page>
    </div>
  </div>
);
export default News;
