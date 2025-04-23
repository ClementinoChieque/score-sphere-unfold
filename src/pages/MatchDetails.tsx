
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatchDetail from '@/components/MatchDetail';
import { getMatch } from '@/lib/mockData';

const MatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  const match = getMatch(id || "");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <svg className="h-20 w-20 text-gray-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-heading font-bold text-white mb-4">Partida não encontrada</h1>
          <p className="text-gray-400 mb-8">O jogo que você está procurando não existe ou foi removido.</p>
          <Link to="/" className="text-sport-highlight hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar para a página inicial
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MatchDetail match={match} />
          </div>
          <div>
            {/* Side banner ad */}
            <div className="ad-container h-80 mb-6">
              Banner de anúncio 300x250
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Sobre as equipes</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={match.homeTeam.logo} 
                      alt={match.homeTeam.name} 
                      className="h-8 w-8 object-contain bg-gray-800 rounded-full p-1" 
                    />
                    <h4 className="font-medium text-white">{match.homeTeam.name}</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Informações sobre o {match.homeTeam.name} e seu desempenho recente neste campeonato.
                    Estatísticas, curiosidades e dados importantes sobre o time.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={match.awayTeam.logo} 
                      alt={match.awayTeam.name} 
                      className="h-8 w-8 object-contain bg-gray-800 rounded-full p-1" 
                    />
                    <h4 className="font-medium text-white">{match.awayTeam.name}</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Informações sobre o {match.awayTeam.name} e seu desempenho recente neste campeonato.
                    Estatísticas, curiosidades e dados importantes sobre o time.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="text-lg font-medium text-white mb-4">Últimos confrontos</h3>
                <p className="text-sm text-gray-400">
                  Histórico recente de confrontos entre {match.homeTeam.name} e {match.awayTeam.name}.
                </p>
              </div>
            </div>
            
            {/* Side banner ad */}
            <div className="ad-container h-80 mt-6">
              Banner de anúncio 300x250
            </div>
          </div>
        </div>
        
        {/* Ad banner */}
        <div className="ad-container h-24 my-8">
          Banner de anúncio 970x90
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MatchDetails;
