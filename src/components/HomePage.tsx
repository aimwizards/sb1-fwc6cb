import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Shield, Zap, Lock, Globe, Users, Coins, ArrowRight } from 'lucide-react';
import { Slideshow } from '@/components/Slideshow';
import { WalletAnimation } from '@/components/WalletAnimation';
import { ParticleBackground } from '@/components/ParticleBackground';
import { CryptoBackground } from '@/components/CryptoBackground';

const DOWNLOAD_URL = "https://github.com/yourusername/nodistribute/releases/latest";

export function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Advanced encryption protocols ensure your assets remain protected at all times.',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Execute transactions instantly with our optimized network integration.',
      iconColor: 'text-yellow-400',
    },
    {
      icon: Lock,
      title: 'Full Control',
      description: 'Your private keys never leave your device. You have complete control over your funds.',
      iconColor: 'text-blue-400',
    },
    {
      icon: Coins,
      title: 'Multi-Currency Support',
      description: 'Manage multiple cryptocurrencies in one secure place with seamless integration.',
      iconColor: 'text-orange-400',
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive interface suitable for both beginners and experienced users.',
      iconColor: 'text-pink-400',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your wallet from anywhere in the world, anytime.',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container relative mx-auto py-12 md:py-24 px-4 md:px-6 text-center overflow-hidden">
        <ParticleBackground />
        <CryptoBackground />
        <div className="space-y-6 animate-fade-in relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent animate-shimmer">
            The Most Secure Bitcoin Wallet
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-purple-200/80">
            Take control of your digital assets with military-grade encryption and
            intuitive design. Your keys, your coins, your future.
          </p>
          <div className="pt-8">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-400 hover:opacity-90 transition-opacity"
              >
                <Download className="h-5 w-5" />
                Download Now
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-16">
          <Slideshow />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
          Why Choose Nodistribute?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 bg-black/40 backdrop-blur-lg border-white/10 hover:bg-black/50 transition-all duration-300 hover:-translate-y-1"
            >
              <feature.icon className={`mb-4 h-12 w-12 ${feature.iconColor} group-hover:scale-110 transition-transform`} />
              <h3 className="mb-2 text-xl font-semibold text-purple-200">
                {feature.title}
              </h3>
              <p className="text-purple-200/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Wallet Animation Section */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent animate-shimmer">
              Your Gateway to Financial Freedom
            </h2>
            <div className="space-y-4">
              <p className="text-purple-200/80 leading-relaxed">
                Nodistribute is more than just a wallet - it's your personal fortress in the digital asset space. Built with cutting-edge technology and designed for maximum security, our wallet ensures your cryptocurrencies remain solely under your control.
              </p>
              <p className="text-purple-200/80 leading-relaxed">
                With our innovative approach to key management and transaction handling, you can rest assured that your assets are protected by the same encryption standards used by leading financial institutions worldwide.
              </p>
              <Button variant="ghost" className="group mt-4 text-purple-400 hover:text-purple-300">
                Learn more about our technology
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <WalletAnimation />
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="rounded-lg bg-black/40 backdrop-blur-lg border border-white/10 p-6 md:p-8">
          <h2 className="mb-8 text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent animate-shimmer">
            Advanced Security Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: '🔒',
                title: 'End-to-End Encryption',
                description:
                  'All data is encrypted locally using AES-256 encryption before any network transmission.',
              },
              {
                icon: '🔑',
                title: 'Secure Key Generation',
                description:
                  'Hardware-level entropy ensures truly random key generation for maximum security.',
              },
              {
                icon: '👁️',
                title: 'Privacy Protection',
                description:
                  'No KYC required. Your identity remains private and protected.',
              },
              {
                icon: '💾',
                title: 'Backup & Recovery',
                description:
                  'Secure backup solutions with encrypted recovery phrases.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group hover:bg-black/50 p-4 rounded-lg transition-colors"
              >
                <h3 className="mb-4 text-xl font-semibold text-purple-200">
                  <span className="mr-2 group-hover:scale-110 inline-block transition-transform">
                    {feature.icon}
                  </span>
                  {feature.title}
                </h3>
                <p className="text-purple-200/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}