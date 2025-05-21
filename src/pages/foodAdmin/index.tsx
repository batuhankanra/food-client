import { setModal } from "../../stores/features/modal"
import { useAppDispatch, useAppSelector } from "../../stores/hook"


const FoodAdmin = () => {
  const {data} =useAppSelector(state=>state.api)
  const dispatch=useAppDispatch()
  return (
    <div className="overflow-x-auto rounded-lg shadow-md w-11/12 mx-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold py-5">
          Admin Food
        </h1>
        <button onClick={()=>dispatch(setModal({modal:'create-food',id:''}))} className="border border-green-600 hover:bg-green-800 p-3 rounded-md cursor-pointer">
          Yemek Tarifi Olustur
        </button>
      </div>
      <table className="min-w-full  text-left text-sm ">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Başlık</th>
            <th className="px-6 py-3">Açıklama</th>
            <th className="px-6 py-3">Kategorı</th>
            <th className="px-6 py-3">Tarih</th>
            <th className="px-6 py-3">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b hover:bg-zinc-800">
              <td className="px-6 py-4">{item._id}</td>
              <td className="px-6 py-4 font-medium">{item.title}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{String(item.createdAt).split('T')[0]}</td>
              <td className="px-6 py-4 flex items-center gap-x-2">
                <button className="border-blue-600 border hover:bg-blue-600 w-18 h-10 rounded-lg  cursor-pointer" onClick={()=>dispatch(setModal({modal:'update-food',id:item._id}))}>Düzenle</button>
                <button className="border-red-600 border hover:bg-red-600 w-10 h-10 rounded-lg  cursor-pointer" onClick={()=>dispatch(setModal({modal:'delete-food',id:item._id}))} >Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FoodAdmin
