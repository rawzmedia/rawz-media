'use client';

export default function Page() {
  const packages = [
    { name: "Fotografía de Producto", price: "Desde $200.000 + IVA", features: ["Iluminación y fondo blanco","Edición básica incluida","Opcional: asistente en set"] },
    { name: "Producciones Corporativas (Foto + Video)", price: " Desde $250.000 + IVA", features: ["Drone y entrevistas (opcionales)","Entrega optimizada para RRSS","Soporte de respaldo en set (RAWZ Tech Kit)"] },
    { name: "Eventos Corporativos (Cobertura)", price: "$200.000 – $300.000 + IVA", features: ["Fotos + video + reel","Edición incluida","4 cuñas / testimonio (opcionales)"] },
    { name: "Pack Evento en Santiago", price: "$250.000 + IVA", features: ["Fotos + reel + 4 cuñas","Asistente + edición","Política: 50% de anticipo"] },
  ];

  const services = [
    { title: "Cobertura de Eventos", desc: "Foto y video de alto impacto para activaciones, ferias y lanzamientos." },
    { title: "Contenido Corporativo", desc: "Entrevistas, cápsulas internas, reels y piezas para marketing." },
    { title: "Producto & E-commerce", desc: "Fotografía limpia, consistente y lista para catálogo." },
    { title: "Aéreos con Drone", desc: "Planos aéreos estables y legales (según requerimiento)." },
    { title: "Asistencia Técnica (RAWZ Tech Kit)", desc: "Respaldo en set, ingest, verificación y flujo de archivos pro." },
  ];

  const nav = ["Servicios","Portafolio","Paquetes","Contacto"];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white text-zinc-900 grid place-items-center font-black tracking-tight">R</div>
            <div className="leading-tight">
              <div className="font-eurostile font-extrabold text-lg tracking-tight">RAWZ MEDIA</div>
              <div className="text-xs text-zinc-400">Productora Audiovisual — Santiago, Chile</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (<a key={n} href={`#${n.toLowerCase()}`} className="text-zinc-300 hover:text-white transition">{n}</a>))}
            <a href="#contacto" className="inline-flex items-center rounded-2xl border border-zinc-700 px-4 py-2 hover:border-white transition">Cotizar</a>
          </nav>
        </div>
      </header>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,244,245,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Visuales que venden</p>
            <h1 className="font-eurostile mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">Contenido <span className="text-white/90">ágil</span>, <span className="text-white/90"><span className="underline decoration-white/20">limpio</span></span> y rentable.</h1>
            <p className="mt-5 text-zinc-300 text-lg">Producimos fotos y videos que convierten: desde activaciones hasta campañas corporativas. Directo al grano, con un flujo pro y entregas listas para RRSS.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="inline-flex justify-center rounded-2xl bg-white text-zinc-900 px-6 py-3 font-semibold hover:bg-zinc-200 transition">Pedir cotización</a>
              <a href="#paquetes" className="inline-flex justify-center rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:border-white transition">Ver paquetes</a>
            </div>
            <div className="mt-6 text-xs text-zinc-400">Política de pagos: 50% de anticipo al aprobar. Saldo a la entrega.</div>
          </div>
        </div>
      </section>
      <section id="servicios" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Servicios</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-zinc-800 hover:border-zinc-600 transition bg-zinc-900/30 p-6">
              <div className="text-base font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
              <div className="mt-4 text-xs text-zinc-500">Incluye coordinación, checklist y respaldo de archivos.</div>
            </div>
          ))}
        </div>
      </section>
      <section id="portafolio" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Portafolio</h2>
          <span className="text-xs text-zinc-500">Muestra / placeholders</span>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-800">
              <div className="h-full w-full grid place-items-center text-zinc-500 text-sm">Proyecto {i}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="paquetes" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Paquetes y Valores</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <div className="text-sm text-zinc-300">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc pl-5">
                {p.features.map((f) => (<li key={f}>{f}</li>))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#contacto" className="inline-flex rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 transition">Cotizar este</a>
                <a href="#contacto" className="inline-flex rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold hover:border-white transition">Agendar llamada</a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">Valores base + IVA. Propuestas finales según briefing, tiempos y logística.</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight">¿Listo para producir algo que venda?</h3>
              <p className="text-sm text-zinc-400 mt-1">En 24 horas te enviamos una propuesta cerrada según tu necesidad.</p>
            </div>
            <a href="#contacto" className="inline-flex rounded-2xl bg-white text-zinc-900 px-6 py-3 font-semibold hover:bg-zinc-200 transition">Hablar ahora</a>
          </div>
        </div>
      </section>
 <section id="contacto" className="mx-auto max-w-7xl px-4 py-16">
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contacto</h2>
  <div className="mt-6 grid md:grid-cols-2 gap-6">
    <form className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
      <div>
        <label className="text-sm text-zinc-300">Nombre</label>
        <input
          className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-white"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label className="text-sm text-zinc-300">Email</label>
        <input
          type="email"
          className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-white"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label className="text-sm text-zinc-300">Mensaje</label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-white"
          placeholder="Cuéntanos del proyecto"
        />
      </div>
      <div className="flex gap-3">
        <a
          href="mailto:hola@rawzmedia.cl?subject=Cotización%20RAWZ%20MEDIA"
          className="inline-flex rounded-2xl bg-white text-zinc-900 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-200 transition"
        >
          Enviar
        </a>
        <a
          href="https://wa.me/56900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-2xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold hover:border-white transition"
        >
          WhatsApp
        </a>
      </div>
    </form>
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
      <div className="text-sm text-zinc-300">Detalles</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-400">
        <li><span className="text-zinc-300">Email:</span> hola@rawzmedia.cl</li>
        <li><span className="text-zinc-300">Ubicación:</span> Santiago (Lampa), Chile</li>
        <li><span className="text-zinc-300">Horarios:</span> Lun–Vie / 10:00–19:00</li>
        <li className="text-xs text-zinc-500 mt-4">
          Al enviar, aceptas nuestra política de pagos: 50% de anticipo al aprobar; saldo a la entrega.
        </li>
      </ul>
    </div>
  </div>
      </section>
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} RAWZ MEDIA — Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300">Instagram</a>
            <a href="#" className="hover:text-zinc-300">TikTok</a>
            <a href="#" className="hover:text-zinc-300">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
