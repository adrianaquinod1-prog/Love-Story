import React, { useEffect, useState } from 'react';

export default function Countdown(){
  const target = new Date('2025-02-14T00:00:00');
  const [now, setNow] = useState(new Date());
  useEffect(()=>{
    const t = setInterval(()=> setNow(new Date()), 1000);
    return ()=> clearInterval(t);
  },[]);
  const diff = Math.max(0, target - now);
  if (diff === 0) return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto bg-white/80 glass rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold">¡Es San Valentín! 💖</h2>
      </div>
    </section>
  );
  const dias = Math.floor(diff / (1000*60*60*24));
  const horas = Math.floor((diff / (1000*60*60)) % 24);
  const minutos = Math.floor((diff / (1000*60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const cards = [
    {label:'Días', value:dias},
    {label:'Horas', value:horas},
    {label:'Min', value:minutos},
    {label:'Seg', value:segundos}
  ];

  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto bg-white/80 glass rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">💘 Falta para San Valentín 2025</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {cards.map(c=>(
            <div key={c.label} className="p-4 rounded-md bg-floral/20">
              <div className="text-2xl font-bold">{c.value}</div>
              <div className="text-xs uppercase mt-1">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
