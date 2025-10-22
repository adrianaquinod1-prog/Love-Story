import React from 'react';

export default function Hero(){
  return (
    <section className="min-h-[48vh] flex items-center justify-center text-center px-6 py-12 bg-floral">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass mx-auto mb-6">
          <span style={{fontSize:36}}>💕</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Our Love Story 💕</h1>
        <p className="text-sm sm:text-lg text-muted-foreground/90">Cada momento contigo es un recuerdo eterno.</p>
      </div>
    </section>
  );
}
