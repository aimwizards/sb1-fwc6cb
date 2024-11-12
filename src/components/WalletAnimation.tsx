import { useEffect, useState } from 'react';
import { Shield, Lock, Check } from 'lucide-react';

export function WalletAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { 
      icon: Shield, 
      text: "Secure",
      bgColor: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
      activeIconColor: "text-emerald-300",
      glowColor: "emerald"
    },
    { 
      icon: Lock, 
      text: "Private",
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400",
      activeIconColor: "text-blue-300",
      glowColor: "blue"
    },
    { 
      icon: Check, 
      text: "Verified",
      bgColor: "bg-amber-500/20",
      iconColor: "text-amber-400",
      activeIconColor: "text-amber-300",
      glowColor: "amber"
    }
  ];

  return (
    <div className="relative h-[400px] w-full rounded-xl bg-gradient-to-br from-gray-900/90 to-slate-900/90 p-8">
      <div className="absolute inset-0 backdrop-blur-sm rounded-xl" />
      <div className="relative h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                step === index
                  ? 'scale-110 opacity-100'
                  : 'scale-90 opacity-50'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`rounded-full ${item.bgColor} p-6 relative`}>
                  {step === index && (
                    <div className={`absolute inset-0 rounded-full animate-pulse bg-${item.glowColor}-500/20`} />
                  )}
                  <item.icon
                    className={`h-12 w-12 transition-colors ${
                      step === index
                        ? `${item.activeIconColor} animate-bounce`
                        : item.iconColor
                    }`}
                  />
                </div>
                <span className={`text-lg font-semibold ${
                  step === index ? 'text-gray-200' : 'text-gray-400'
                }`}>
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-2 w-2 rounded-full ${
              i % 3 === 0 ? 'bg-emerald-400/20' :
              i % 3 === 1 ? 'bg-blue-400/20' :
              'bg-amber-400/20'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}