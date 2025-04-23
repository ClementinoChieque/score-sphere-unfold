
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Implementar funcionalidade de busca
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center border border-gray-700 bg-gray-800 rounded-md overflow-hidden">
          <div className="px-3 text-gray-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar times, competições, jogos..."
            className="flex-1 bg-transparent py-3 px-2 text-white outline-none placeholder:text-gray-500"
            autoFocus
          />
          {query && (
            <button 
              type="button" 
              onClick={() => setQuery('')}
              className="px-2 text-gray-400 hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          {onClose && (
            <button 
              type="button" 
              onClick={onClose}
              className="px-3 text-gray-400 hover:text-gray-300 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </form>

      {query && (
        <div className="absolute left-0 right-0 bg-gray-900 mt-2 rounded-md border border-gray-700 shadow-xl z-50 max-h-96 overflow-auto">
          <div className="p-3 text-sm text-gray-400">Resultados da pesquisa para "{query}" aparecerão aqui</div>
          {/* Resultados da pesquisa irão aqui */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
