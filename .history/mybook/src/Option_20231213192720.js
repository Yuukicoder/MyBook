import './Option.css'
var ButtonCollapse = () => document.getElementById("collapse").innerHTML = "Hello World";
// function sayHello(name) {
//     alert(`hello, ${name}`);
//   }

var Option = (x) => {
    function sayHello(name) {
        alert(`hello, ${name}`);
      }
    return (
    <div class="mt-4 ml-4  grid gap-6">

    <div class="flex gap-4 items-center box ">
        <div class="avatar">
        </div>
        <p class="font-semibold text-xl text-slate-700">{x.name}</p>
        
    </div>
    <div class="flex gap-4 items-center box">
    <i class="fa-solid fa-user-group text-green-300"></i>
        <p class="font-semibold text-xl text-slate-700">Bạn bè</p>
        
    </div>
    <div class="flex gap-4 items-center box ">
    <i class="fa-regular fa-clock text-blue-400"></i> 
        <p class="font-semibold text-xl text-slate-700">Kỷ niệm</p>
        
    </div>
    <div class="flex gap-4 items-center box ">
    <i class="fa-solid fa-tag text-purple-400"></i>
        <p class="font-semibold text-xl text-slate-700">Đã lưu</p>
        
    </div>
    <div class="flex gap-4 items-center box ">
    <i class="fa-solid fa-people-group text-blue-500"></i>
        <p class="font-semibold text-xl text-slate-700">Nhóm</p>
        
    </div>
    <div class="flex gap-4 items-center box ">
    <i class="fa-solid fa-store text-blue-500"></i>
        <p class="font-semibold text-xl text-slate-700">Cửa hàng</p>
        
    </div>
    <div class="flex gap-4 items-center box ">
        <i class="fa-solid fa-newspaper text-blue-400"></i>
        <p class="font-semibold text-xl text-slate-700">Bảng feed</p>
        
    </div>
    <div class="flex gap-4 items-center box " >
        <div class="avatar">

    <i class="fa-solid fa-chevron-down text-blue-500 "></i>
        </div>
        <p  id="Collapse"class="font-semibold text-xl text-slate-700"  onclick={sayHello}>Xem thêm</p>
        
    </div>
    {/* <div class="line"></div>
    <p class="text-base font-semibold text-gray-500">Lối tắt của bạn</p> */}
    </div>
)}
export default Option