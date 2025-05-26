
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../stores/hook'
import { setModal } from '../../stores/features/modal'



const RecipeId = () => {
    const {category}=useParams()
    const {data}=useAppSelector(state=>state.api)
    const dispatch=useAppDispatch()
  return (
    <section className='max-w-7xl mx-auto p-6'>
        
        <h1 className='text-3xl font-bold mb-6 capitalize '>{category} tarifleri</h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                {data && data.filter(item=>item.category===category).map((item,i)=>(
                    <div key={i} className='flex flex-col  bg-zinc-600 rounded-xl shadow md:shadow-lg transition overflow-hidden w-full '> 
                        <img src={item.image} alt={item.title} className='w-full h-50  object-cover  ' />
                        <div className='p-4 flex-1'>
                            <h3 className='text-xl font-semibold '> {item.title}</h3>
                            <p className='text-sm mt-2 mb-4 text-wrap'>{item.description} </p>
                            <button className='border border-sky-500 p-2 rounded-md hover:bg-sky-700 cursor-pointer duration-300 w-full' type='button' onClick={()=>dispatch(setModal({id:item._id,modal:'food'}))} >Tarifi Gor</button>
                        </div>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default RecipeId
