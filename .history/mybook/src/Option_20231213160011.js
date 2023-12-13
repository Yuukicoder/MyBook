import './Option.css'
var Option = (x) => (
    <div class="mt-4 ml-4 gap-3">

    <div class="flex gap-2 items-center">
        <div class="avatar">
        </div>
        <p class="font-semibold text-xl text-slate-700">{x.name}</p>
        
    </div>
    <div class="flex gap-2 items-center">
    <i class="fa-solid fa-user-group"></i>
        <p class="font-semibold text-xl text-slate-700">Bạn bè</p>
        
    </div>
    <div class="flex gap-2 items-center">
    <i class="fa-regular fa-clock"></i> 
        <p class="font-semibold text-xl text-slate-700">{x.name}</p>
        
    </div>
    
    </div>
)
export default Option