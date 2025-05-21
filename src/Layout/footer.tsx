import { FaInstagram,FaLinkedinIn,FaXTwitter  } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
       <footer className="bg-zinc-900 text-zinc-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Slogan */}
        <div>
          <h1 className="text-2xl font-bold text-white">Lezzetleri Öğren</h1>
          <p className="mt-2 text-sm text-zinc-400">Geleneksel tatlardan modern lezzetlere her gün yeni tariflerle karşınızdayız.</p>
        </div>

        {/* Kategoriler */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Kategoriler</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to={'/tatlilar'} className="hover:text-yellow-400">Tatlılar</Link></li>
            <li><Link  to={'/tatlilar'} className="hover:text-yellow-400">Ana Yemekler</Link></li>
            <li><Link  to={'/tatlilar'} className="hover:text-yellow-400">Salatalar</Link></li>
            <li><Link  to={'/tatlilar'} className="hover:text-yellow-400">Çorbalar</Link></li>
          </ul>
        </div>

        {/* Sayfalar */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Sayfalar</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to={'/tatlilar'} className="hover:text-yellow-400">Anasayfa</Link></li>
            <li><Link to={'/tatlilar'} className="hover:text-yellow-400">Hakkımızda</Link></li>
            <li><Link to={'/tatlilar'} className="hover:text-yellow-400">İletişim</Link></li>
            <li><Link to={'/tatlilar'} className="hover:text-yellow-400">Gizlilik Politikası</Link></li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Bizi Takip Edin</h2>
          <div className="flex space-x-4">
            <Link to={'/tatlilar'} className="hover:text-zinc-400 text-3xl"><FaInstagram/></Link>
            <Link to={'/tatlilar'} className="hover:text-black text-3xl"><FaXTwitter/></Link>
            <Link to={'/tatlilar'} className="hover:text-sky-400 text-3xl"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-zinc-500">
        © 2025 Kevser Çetin. Tüm hakları saklıdır.
      </div>
    </footer>
    </div>
  )
}

export default Footer
