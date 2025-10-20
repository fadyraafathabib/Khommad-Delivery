import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'الأنشطة', href: '/activities' },
    { name: 'الوسائط', href: '/media' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="section-container flex items-center justify-between py-4">
        <div className="flex items-center space-x-2 mr-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-gold-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl"><img src="../../../public/logo.jpg" alt="" /></span>
          </div>
          <h1 className="text-xl font-bold text-blue-900 ">خدام ديلفري</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 ml-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-blue-900 hover:text-gold-600 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-900 ml-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mr-4 ml-4">
          <div className="section-container py-4 flex flex-col  space-y-4 mr-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-blue-900 hover:text-gold-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
