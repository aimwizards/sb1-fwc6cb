import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone, Github, Twitter, ChevronDown } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Support() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get in touch with our support team',
      action: 'support@nodistribute.com',
      link: 'mailto:support@nodistribute.com',
      color: 'text-blue-400',
    },
    {
      icon: MessageSquare,
      title: 'Discord Community',
      description: 'Join our community chat',
      action: 'Join Discord',
      link: 'https://discord.gg/yourdiscord',
      color: 'text-indigo-400',
    },
    {
      icon: Twitter,
      title: 'Twitter Support',
      description: 'Follow us for updates and support',
      action: '@nodistribute',
      link: 'https://twitter.com/nodistribute',
      color: 'text-sky-400',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Report issues and contribute',
      action: 'View Repository',
      link: 'https://github.com/yourusername/nodistribute',
      color: 'text-purple-400',
    },
  ];

  const faqs = [
    {
      question: 'How do I reset my wallet password?',
      answer: 'For security reasons, we cannot reset your password. Make sure to keep your recovery phrase safe as it\'s the only way to restore access to your wallet.',
    },
    {
      question: 'Is Nodistribute open source?',
      answer: 'Yes, Nodistribute is fully open source. You can view and contribute to our code on GitHub.',
    },
    {
      question: 'What cryptocurrencies are supported?',
      answer: 'We currently support Bitcoin, Ethereum, and various other major cryptocurrencies. Check our documentation for a full list.',
    },
    {
      question: 'How secure is my wallet?',
      answer: 'Your wallet is protected by military-grade encryption. We use industry-standard security practices and your private keys never leave your device.',
    },
    {
      question: 'Can I recover my wallet on another device?',
      answer: 'Yes, you can recover your wallet on any device using your 12-word recovery phrase. Never share this phrase with anyone.',
    },
  ];

  return (
    <div className="relative">
      <ParticleBackground />
      <div className="container mx-auto py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent animate-shimmer">
            Support Center
          </h1>
          <p className="text-purple-200/80 max-w-2xl mx-auto">
            Need help? Our support team is here to assist you. Choose your preferred method of contact below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group p-6 bg-black/40 backdrop-blur-lg border-white/10 hover:bg-black/50 transition-all duration-300 hover:-translate-y-1"
            >
              <method.icon className={`mb-4 h-12 w-12 ${method.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-semibold text-purple-200 mb-2">
                {method.title}
              </h3>
              <p className="text-purple-200/70 mb-4">{method.description}</p>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300 p-0"
                >
                  {method.action} →
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-purple-200 hover:text-purple-300 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-purple-200/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center">
          <p className="text-purple-200/80 mb-4">
            Still need help? Our support team is available 24/7.
          </p>
          <Button
            className="bg-gradient-to-r from-purple-500 to-fuchsia-400 hover:opacity-90 transition-opacity"
          >
            <Phone className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}