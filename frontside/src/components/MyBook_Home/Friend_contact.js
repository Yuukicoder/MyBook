import "./css/Friend_contact.css";
var Ad = (x) => (
  <div class="flex gap-4 items-center hover:bg-gray-300 rounded-xl py-2 px-2 ">
    <div class="Ad_img">
      <img class="w-32 h-32 rounded-xl" src={x.image} alt=""></img>
    </div>
    <div class=" w-44 ">
      <div class="Ad_content uppercase text-black text-base">{x.content}</div>
      <div class="Ad_author font-medium text-xs">{x.author}</div>
    </div>
  </div>
);
var Friend = (x) => (
  <div class="flex gap-4 py-2 pl-2 hover:bg-gray-300 rounded-md">
    <div class="avatar">{x.avatar}</div>
    <div class="name flex font-semibold items-center justify-center">
      {x.name}
    </div>
  </div>
);
var Friend_contact = () => (
  <div class="w-80  mt-20  Contact_scroll">
    <div class="Advertise font-semibold text-gray-500 grid gap-4">
      <p>Được tài trợ</p>
      <Ad
        image="https://images.unsplash.com/photo-1701943523477-7b0b0342d9a0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        content="Đón mùa lễ hội, NHÀ KHAO 40% + FREESHIP"
        author="tchapp.page.link"
      ></Ad>
      <Ad
        image="https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        content="Săn voucher cực dễ!"
        author="shopee.vn"
      ></Ad>
    </div>
    <div class="line3 mt-4 "></div>
    <div class="Friend  mt-4 mr-4 grid gap-4">
      <div class="flex relative">
        <p class="text-gray-500 font-semibold">Người liên hệ</p>
        <div class="flex absolute right-0 gap-4">
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
          <i class="fa-solid fa-ellipsis text-gray-500"></i>
        </div>
      </div>
      <Friend name="aDucDev"></Friend>
      <Friend name="Hương Trà"></Friend>
      <Friend name="Bình An"></Friend>
      <Friend name="Hoàng Nga"></Friend>
      <Friend name="Bảo Nam"></Friend>
      <Friend name="Pham Duc"></Friend>
      <Friend name="aDucDev1"></Friend>
      <Friend name="aDucDev2"></Friend>
      <Friend name="aDucDev3"></Friend>
      <Friend name="aDucDev4"></Friend>
      <Friend name="aDucDev5"></Friend>
    </div>
  </div>
);
export default Friend_contact;
