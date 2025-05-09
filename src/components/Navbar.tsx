
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="py-4 border-b border-gray-800 bg-gray-900/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-sport-highlight rounded-full p-1">
            <div className="bg-gray-900 rounded-full p-1">
              <div className="h-6 w-6 bg-sport-highlight rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-heading font-bold tracking-tight">
            <span className="text-white">Score</span>
            <span className="text-sport-highlight">Sphere</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/live" className="text-gray-300 hover:text-white transition-colors">
            Ao Vivo
          </Link>
          <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors">
            Calendário
          </Link>
          <Link to="/leagues" className="text-gray-300 hover:text-white transition-colors">
            Competições
          </Link>
          <Link to="/teams" className="text-gray-300 hover:text-white transition-colors">
            Times
          </Link>
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="p-2 rounded-full hover:bg-gray-800 transition-all"
          >
            <Search className="h-5 w-5 text-gray-400" />
          </button>
          {user ? (
            <Button 
              onClick={signOut}
              variant="ghost" 
              className="text-gray-300 hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          ) : (
            <Button 
              onClick={() => navigate('/auth')} 
              className="bg-sport-highlight hover:bg-sport-highlight/90 text-gray-900"
            >
              Entrar
            </Button>
          )}
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="p-2 rounded-full hover:bg-gray-800 transition-all"
          >
            <Search className="h-5 w-5 text-gray-400" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 rounded-full hover:bg-gray-800 transition-all"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-400" />
            ) : (
              <Menu className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 py-4 px-6 flex flex-col gap-4">
          <Link to="/live" className="text-gray-300 py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
            Ao Vivo
          </Link>
          <Link to="/schedule" className="text-gray-300 py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
            Calendário
          </Link>
          <Link to="/leagues" className="text-gray-300 py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
            Competições
          </Link>
          <Link to="/teams" className="text-gray-300 py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
            Times
          </Link>
          <Button 
            onClick={() => {
              handleAuthClick();
              setMobileMenuOpen(false);
            }} 
            className="bg-sport-highlight hover:bg-sport-highlight/90 text-gray-900 mt-2"
          >
            {user ? 'Sair' : 'Entrar'}
          </Button>
        </div>
      )}

      {searchOpen && (
        <div className="absolute top-full left-0 right-0 p-4 bg-gray-900 border-b border-gray-800">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
