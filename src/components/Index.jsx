import React from 'react';
import Hero from './Hero';
import LoveNotes from './LoveNotes';
import Countdown from './Countdown';
import MemoryGallery from './MemoryGallery';

export default function Index(){
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="px-4 sm:px-8 -mt-8">
        <LoveNotes />
        <Countdown />
        <MemoryGallery />
      </main>
    </div>
  );
}
