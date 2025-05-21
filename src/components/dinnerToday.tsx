import { Link } from "react-router";


export const categories = [
  { name: "Kahvaltılıklar", icon: "🍳", color: "bg-yellow-100", slug: "kahvaltiliklar" },
  { name: "Ana Yemekler", icon: "🍛", color: "bg-red-100", slug: "ana-yemekler" },
  { name: "Tatlılar", icon: "🍰", color: "bg-pink-100", slug: "tatlilar" },
  { name: "Çorbalar", icon: "🥣", color: "bg-green-100", slug: "corbalar" },
  { name: "Atıştırmalıklar", icon: "🍟", color: "bg-blue-100", slug: "atistirmaliklar" },
];

const DinnerToday = () => {
  return (
   <section className="py-12 bg-[#1e1407]">
    <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-zinc-100 text-center">Kategorilere Göre Tarifler</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center mt-4">
            {categories.map((item,i)=>(
                <Link to={`/recipe/${item.slug}`} key={i} className={`rounded-xl p-6 ${item.color} hover:scale-110 transition-transform duration-300 shadow`}>
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h2 className="text-lg font-medium text-black">{item.name}</h2>
                </Link>
            ))}
        </div>

    </div>

   </section>
  )
}

export default DinnerToday
