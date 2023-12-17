import "./css/Option.css";
// var ButtonCollapse = () =>{

//     var collapse = document.getElementById('collapse');
// }
var Shortcut = (x) => (
  <div class="flex py-2 pl-2 rounded-lg gap-3 hover:bg-gray-200">
    <div class="shortcut_avatar  rounded-md">
      <img
        src={x.image}
        alt=""
      ></img>
    </div>
    <div class=" flex items-center shortcut_content text-lg font-medium">
    {x.content}
    </div>
  </div>
);
var Option = (x) => {
  return (
    <div class="mt-20 ml-4  h-full Option_scroll  ">
      <div class="flex gap-4  items-center box  pb-2 pt-2 pl-2 rounded-lg hover:bg-gray-200 ">
        <div class="avatar">
          <img class="avatar_img" src="Avatar.png" alt=""></img>
        </div>
        <p class="font-semibold text-base text-slate-700">{x.name}</p>
      </div>
      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg">
        <i class="fa-solid fa-user-group text-green-300"></i>
        <p class="font-semibold text-base text-slate-700">Bạn bè</p>
      </div>
      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg ">
        <i class="fa-solid fa-store text-blue-500"></i>
        <p class="font-semibold text-base text-slate-700">Cửa hàng</p>
      </div>
      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg ">
        <i class="fa-regular fa-clock text-blue-400"></i>
        <p class="font-semibold text-base text-slate-700">Kỷ niệm</p>
      </div>
      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg ">
        <i class="fa-solid fa-tag text-purple-400"></i>
        <p class="font-semibold text-base text-slate-700">Đã lưu</p>
      </div>
      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg ">
        <i class="fa-solid fa-people-group text-blue-500"></i>
        <p class="font-semibold text-base text-slate-700">Nhóm</p>
      </div>

      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg ">
        <i class="fa-solid fa-newspaper text-blue-400"></i>
        <p class="font-semibold text-base text-slate-700">Bảng feed</p>
      </div>
      <div class="flex gap-4 items-center box hover:bg-gray-200 pb-2 pt-2 pl-2 rounded-lg ">
        <div class="avatar">
          <i class="fa-solid fa-chevron-down text-black "></i>
        </div>
        <button class="font-semibold text-base text-slate-700">Xem thêm</button>
      </div>
      <div class="line "></div>
      <p class="text-base font-semibold text-gray-500 py-4">Lối tắt của bạn</p>
      <div class="">
        <Shortcut image="https://cubes-asia.com/wp-content/uploads/2021/12/cafe-Americano-1.jpg" content="Hội cafe việt nam"
        ></Shortcut>
        <Shortcut image = "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/6/20/anh-2-16872439278051198533264.jpg"
        content="Douyin"></Shortcut>
        <Shortcut image="https://extrim.vn/_next/image?url=https%3A%2F%2Fextrim-prod.s3.ap-southeast-1.amazonaws.com%2Fgiay_ananas_1_220d18fe9f_b201b8a712.png&w=3840&q=75"
        content="Ananas"></Shortcut>
        <Shortcut image="https://files.fullstack.edu.vn/f8-staging/blog_posts/4049/63da273418657.jpg"
        content="Lập trình thật là vui!"></Shortcut>
        <Shortcut image="https://static.tramdoc.vn/image/img.news/0/0/0/275.jpg?v=1&w=480&h=295&nocache=1"
        content="CLB Sách"></Shortcut>
        <Shortcut image="https://drake.vn/image/catalog/H%C3%ACnh%20content/Gi%C3%A0y-Converse-1970s-%C4%90en/giay-converse-1970s-den-06.jpg" 
        content="Converse"></Shortcut>
        <Shortcut image="https://www.saigontourist.net/uploads/destination/NuocNgoai/NhatBan/hoa-anh-dao/Asakusa_667925704.jpg"
        content="Du lịch Nhật Bản"></Shortcut>
      </div>
    </div>
  );
};
export default Option;
