import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none'
      }}
    >
      <div className="container section-padding">
        <div 
          className="flex justify-between items-center py-4"
          style={{ height: '80px' }}
        >
          {/* Logo */}
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Anthony Terrazas
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <div 
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <div 
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div 
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          top: '80px'
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              style={{
                animation: isMenuOpen 
                  ? `slideInUp 0.5s ease-out ${index * 0.1}s both` 
                  : 'none'
              }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setIsMenuOpen(false)
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}

export default Header 