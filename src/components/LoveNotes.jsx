import React, { useEffect, useState } from 'react';

export default function LoveNotes(){
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  useEffect(()=> {
    try {
      const saved = JSON.parse(localStorage.getItem('notas') || '[]');
      setNotes(saved);
    } catch(e){}
  },[]);
  function saveNote(){
    if (!text.trim()) return;
    const nueva = {texto:text.trim(), fecha: new Date().toLocaleDateString()};
    const arr = [nueva, ...notes];
    setNotes(arr);
    localStorage.setItem('notas', JSON.stringify(arr));
    setText('');
  }
  return (
    <section className="max-w-3xl mx-auto py-6">
      <h2 className="text-lg font-semibold mb-3">📝 Notas de Amor</h2>
      <div className="mb-4">
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Escribe algo bonito..." className="w-full p-3 rounded-md" rows={3}></textarea>
        <div className="flex gap-2 mt-2">
          <button onClick={saveNote} className="px-4 py-2 rounded-md bg-floral text-white">Guardar Nota</button>
          <button onClick={()=>setText('')} className="px-4 py-2 rounded-md border">Cancelar</button>
        </div>
      </div>
      <div className="space-y-3">
        {notes.length===0 && <p className="text-sm text-muted-foreground">Aún no hay notas.</p>}
        {notes.map((n,i)=>(
          <div key={i} className="p-3 rounded-md bg-white/80 glass">
            <p>{n.texto}</p>
            <small className="text-muted-foreground/80">{n.fecha}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
