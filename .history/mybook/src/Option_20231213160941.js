import './Option.css'
var Option = (x) => (
    <div class="mt-4 ml-4  grid gap-3">

    <div class="flex gap-2 items-center box ">
        <div class="avatar">
        </div>
        <p class="font-semibold text-xl text-slate-700">{x.name}</p>
        
    </div>
    <div class="flex gap-2 items-center box">
    <i class="fa-solid fa-user-group text-green-300"></i>
        <p class="font-semibold text-xl text-slate-700">Bạn bè</p>
        
    </div>
    <div class="flex gap-2 items-center box ">
    <i class="fa-regular fa-clock text-blue-400"></i> 
        <p class="font-semibold text-xl text-slate-700">Kỷ niệm</p>
        
    </div>
    <div class="flex gap-2 items-center box ">
    <i class="fa-solid fa-tag text-purple-400"></i>
        <p class="font-semibold text-xl text-slate-700">Đã lưu</p>
        
    </div>
    <div class="flex gap-2 items-center box ">
    <i class="fa-solid fa-people-group text-blue-500"></i>
        <p class="font-semibold text-xl text-slate-700">Kỷ niệm</p>
        
    </div>
    <div class="flex gap-2 items-center box ">
    <i class="fa-regular fa-clock text-blue-400"></i> 
        <p class="font-semibold text-xl text-slate-700">Kỷ niệm</p>
        
    </div>
    
    </div>
)
export default Option