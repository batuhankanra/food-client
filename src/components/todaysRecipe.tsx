import { Link } from 'react-router';
import { useAppSelector } from '../stores/hook';



const TodaysRecipe = () => {
  const {data}=useAppSelector(state=>state.api)
  const randomNumber=Math.floor(Math.random()*10)+1
  const indexData=data[randomNumber]
  
  return (
    <section className="py-12 bg-zinc-900 text-white">
      {indexData  && (
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img
          src={indexData.image}
          alt={indexData.title}
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover h-64"
          onError={(e) => e.currentTarget.style.display = 'none'} 
        />
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm text-zinc-400">Bugünün Tarifi </p>
          <h2 className="text-3xl font-bold">{indexData.title}</h2>
          <p className="text-zinc-200">{indexData.description}</p>
          <Link
            to={`/recipe/${indexData.category}`}
            className="inline-block mt-4 bg-yellow-400 text-zinc-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Tarife Git
          </Link>
        </div>
      </div>
      )}
    </section>
  )
}

export default TodaysRecipe
