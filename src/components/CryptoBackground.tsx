import { useEffect, useRef } from 'react';
import { Coins, Wallet } from 'lucide-react';

interface CryptoBackgroundProps {
  speed?: number;
}

export function CryptoBackground({ speed = 1 }: CryptoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.getElementsByClassName('crypto-icon');
    Array.from(icons).forEach((icon, index) => {
      const element = icon as HTMLElement;
      const delay = Math.random() * 5;
      const duration = (5 + Math.random() * 5) / speed;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      element.style.left = `${startX}%`;
      element.style.top = `${startY}%`;
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;
    });
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: 0.1 }}
    >
      {[...Array(10)].map((_, i) => (
        <Wallet
          key={`btc-${i}`}
          className="crypto-icon absolute w-8 h-8 text-orange-400 animate-float"
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <Coins
          key={`eth-${i}`}
          className="crypto-icon absolute w-8 h-8 text-blue-400 animate-float"
        />
      ))}
    </div>
  );
}