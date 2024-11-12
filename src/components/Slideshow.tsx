import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232&h=1000',
    alt: 'Bitcoin wallet interface',
  },
  {
    url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=2232&h=1000',
    alt: 'Secure cryptocurrency storage',
  },
  {
    url: 'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?auto=format&fit=crop&q=80&w=2232&h=1000',
    alt: 'Cryptocurrency trading',
  },
];

export function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function next() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <div className="relative mx-auto mt-12 h-[400px] w-full max-w-[1000px] overflow-hidden rounded-xl">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              current === index ? 'bg-white w-4' : 'bg-white/50'
            )}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}