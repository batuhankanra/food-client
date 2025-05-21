
import { toast } from "sonner"
import { DeleteApi } from "../../stores/features/api"
import { removeModal } from "../../stores/features/modal"
import { useAppDispatch, useAppSelector } from "../../stores/hook"


const DeleteModal = () => {
  const {id} = useAppSelector(state=>state.modal)
  const dispatch=useAppDispatch()
  const handleButton=()=>{

   toast.promise(dispatch(DeleteApi(id)).unwrap(),{
      loading:'Yükleniyor',
      success:'Başarılı',
      error:'Hata olustu'
    })
  }
  return (
    <div className="py-8 flex items-center justify-center gap-x-4">
      <button className="border-blue-600 border hover:bg-blue-600 w-18 h-10 rounded-lg  cursor-pointer duration-200 hover:text-white font-medium" onClick={handleButton}  >Evet</button>
      <button className="border-red-600 border hover:bg-red-600 w-18 h-10 rounded-lg  cursor-pointer duration-200 hover:text-white font-medium" onClick={()=>dispatch(removeModal())}>Hayir</button>
    </div>
  )
}

export default DeleteModal
