import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wallet, Twitter, Github, Menu } from 'lucide-react';
import { useState } from 'react';
import { HomePage } from '@/components/HomePage';
import { Support } from '@/components/Support';
import { cn } from '@/lib/utils';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const DOWNLOAD_URL = "https://github.com/yourusername/nodistribute/releases/latest";

  const footerLinks = {
    product: [
      { name: 'Download', href: DOWNLOAD_URL },
      { name: 'Features', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Roadmap', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'License', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
          <nav className="container mx-auto py-4 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 z-20">
                <Wallet className="h-8 w-8 text-primary animate-pulse" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  Nodistribute
                </span>
              </Link>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden z-20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-purple-200" />
              </Button>

              {/* Mobile menu */}
              <div
                className={cn(
                  "fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden",
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-purple-200 hover:text-purple-300"
                  >
                    Features
                  </Link>
                  <Link
                    to="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-purple-200 hover:text-purple-300"
                  >
                    Security
                  </Link>
                  <Link
                    to="/support"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-purple-200 hover:text-purple-300"
                  >
                    Support
                  </Link>
                  <a
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-white text-black hover:bg-white/90 transition-opacity rounded-full px-6 py-2"
                  >
                    Download
                  </a>
                </div>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-4">
                <Link to="/">
                  <Button variant="ghost" className="hover:bg-white/10 transition-colors">
                    Features
                  </Button>
                </Link>
                <Button variant="ghost" className="hover:bg-white/10 transition-colors">
                  Security
                </Button>
                <Link to="/support">
                  <Button variant="ghost" className="hover:bg-white/10 transition-colors">
                    Support
                  </Button>
                </Link>
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-black hover:bg-white/90 transition-opacity rounded-full px-6">
                    Download
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black/60 border-t border-white/10">
          <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-purple-300 font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-purple-200/70 hover:text-purple-300 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-purple-300 font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-purple-200/70 hover:text-purple-300 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-purple-300 font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-purple-200/70 hover:text-purple-300 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-purple-300 font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-purple-200/70 hover:text-purple-300 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                <span className="font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  Nodistribute
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-purple-200/70 hover:text-purple-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-purple-200/70 hover:text-purple-300 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <div className="text-sm text-purple-200/70">
                © 2024 Nodistribute. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;