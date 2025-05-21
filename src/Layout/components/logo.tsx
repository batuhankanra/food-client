import { GiCampCookingPot } from 'react-icons/gi'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <Link to={'/'} className="flex md:ml-15 ml-5 py-2 items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight text-orange-500">
      <GiCampCookingPot className="text-2xl md:text-3xl" />
      <span className="text-zinc-200">
        <span className="text-orange-500">Lezzetleri</span> Öğren
      </span>
    </Link>
  )
}

export default Logo
