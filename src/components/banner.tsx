import { Link } from 'react-router'
import banner1 from '/banner1.jpg'

const Banner = () => {
  
  return (
    <section className='flex items-center justify-center w-full '>
        <div className='w-11/12 m-4 relative  '>
            <img src={banner1} alt="banner" className='w-full object-cover mask-y-from-75% mask-x-from-75%' />
            <div className='absolute  bottom-0  md:bottom-24 left-10  '>
              <h1 className='md:text-5xl text-lg font-extrabold text-shadow-sm text-shadow-sky-500'>Lezzetleri Öğren, Sofraları Şenlendir!</h1>
              <p className='text-xs font-medium md:text-xl text-gray-200 text-shadow-xs text-shadow-sky-100 py-4'>Kolay, hızlı ve lezzetli yemek tarifleri burada seni bekliyor</p>
              <Link to={'/tarifAdmin'} className= ' border border-red-500 hover:bg-red-600 cursor-pointer font-semibold text-lg transition-all duration-300 px-1 py-2 rounded-md'>Tariflere Göz At </Link>
            </div>
        </div>
    </section>
  )
}

export default Banner
