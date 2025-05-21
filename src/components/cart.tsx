import { useAppSelector } from "../stores/hook";







const Cart=()=>{
   const {data}=useAppSelector(state=>state.api)
    console.log(data[0])
    const datas:FoodProps[]=[]
    datas.push(data[0])
    datas.push(data[1])
    datas.push(data[2])
   
  return (
    <section className='py-10 bg-[#120907] rounded-md'>
      {datas.length>0 && (
        <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-zinc-200 mb-6 text-center'>Popüler Tarifler</h2>
        <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {datas.map((item,i)=>(
            <div key={i} className='bg-zinc-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'>
              {item?.image && <img src={item.image} alt={item.title} onError={(e) => e.currentTarget.style.display = 'none'}  className='w-full h-48 object-cover' />}
              <div className="p-3">
                <h3 className='text-xl font-semibold text-zinc-800'>{item?.title}</h3>
                <p className='text-base  text-zinc-950'>{item?.description}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
      )}
    </section>
  );
}
export default Cart

