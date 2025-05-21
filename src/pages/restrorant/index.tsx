


const Restorant = () => {
  return (
        <section className="max-w-4xl mx-auto px-4 py-12">
          
      <h2 className="text-3xl font-bold  mb-6">Restoranımız</h2>

      <div className=" bg-zinc-900 rounded-xl shadow p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold ">Konum</h3>
          <p className="text-zinc-200">İstanbul, Kadıköy, Bahariye Caddesi No:12</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold ">İletişim</h3>
          <p className="text-zinc-200">Telefon: +90 212 555 55 55</p>
          <p className="text-zinc-200">E-posta: info@lezzetleriogren.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold ">Çalışma Saatleri</h3>
          <p className="text-zinc-200">Pazartesi - Cumartesi: 09:00 - 22:00</p>
          <p className="text-zinc-200">Pazar: Kapalı</p>
        </div>

        <div className="pt-4">
          <iframe
                title="Restoran Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193677.13961641945!2d28.3576345!3d37.2151836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c044b11d566f6b%3A0x2501861872fdcf9f!2sMu%C4%9Fla!5e0!3m2!1str!2str!4v1715153142053!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
            />
        </div>
      </div>
    </section>

  )
}

export default Restorant
