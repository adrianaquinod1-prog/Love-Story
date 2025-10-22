import React, { useState } from 'react';

export default function MemoryGallery(){
  const [images, setImages] = useState([
    // placeholder floral images
    'https://images.unsplash.com/photo-1502741126161-b048400d4f35?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60'
  ]);

  function handleUpload(e){
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach(file=>{
      const reader = new FileReader();
      reader.onload = (ev)=>{
        if (ev.target?.result) setImages(prev => [ev.target.result, ...prev]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  }

  return (
    <section className="max-w-4xl mx-auto py-6">
      <h2 className="text-lg font-semibold mb-3">📸 Nuestros Recuerdos</h2>
      <div className="mb-4">
        <label className="inline-block px-4 py-2 rounded-md bg-floral text-white cursor-pointer">
          Subir Fotos
        </label>
        <input id="upload" type="file" multiple accept="image/*" onChange={handleUpload} className="hidden" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((s,i)=>(
          <div key={i} className="aspect-square overflow-hidden rounded-md">
            <img src={s} alt={'mem'+i} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
