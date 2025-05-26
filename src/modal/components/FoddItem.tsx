import { useAppSelector } from "../../stores/hook"


const FoodModal = () => {
    const {id}=useAppSelector(state=>state.modal)
    const data=useAppSelector(state=>state.api.data)
    const currentData=data.find(x=>x._id===id)
    console.log(currentData)
  return (
    <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 border border-gray-200">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img
        className="h-48 w-full object-cover md:w-48"
        src={currentData?.image}
        alt={currentData?.title}
      />
    </div>
    <div className="p-4 flex flex-col justify-between">
      <div>
        <h2 className="uppercase tracking-wide text-lg text-indigo-600 font-bold">
          1. {currentData?.title}
        </h2>
        <p className="block mt-1 text-sm leading-tight font-medium text-black">
          {currentData?.description}
        </p>
        <div className="mt-2 text-sm ">
          <strong>İçindekiler:</strong> {currentData?.ingredients.map((item,i)=>(
            <p key={i}> 
                {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
          <strong>Yapılma aşaması:</strong>
          {currentData?.steps.map((item,i)=>(
            <div key={i}>
                 {i+1}-{item}
            </div>
          ))}
      </div>
      <div className="mt-4">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
          Kategori: Ana Yemek
        </span>
      </div>
    </div>
  </div>
</div>
  )
}

export default FoodModal
