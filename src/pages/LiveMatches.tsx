
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatchCard from '@/components/MatchCard';
import { getLiveMatches } from '@/lib/mockData';

const LiveMatches = () => {
  const liveMatches = getLiveMatches();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="live-indicator">
            <span></span>
            <div></div>
          </div>
          <h1 className="text-3xl font-heading font-bold text-white">Jogos ao Vivo</h1>
        </div>
        <p className="text-gray-400 mb-8">Acompanhe em tempo real todos os jogos em andamento.</p>
        
        {/* Ad banner */}
        <div className="ad-container h-24 mb-8">
          Banner de anúncio 970x90
        </div>
        
        {liveMatches.length === 0 ? (
          <div className="text-center py-16">
            <svg className="h-16 w-16 mx-auto text-gray-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-white mb-2">Nenhum jogo ao vivo no momento</h3>
            <p className="text-gray-400">Volte mais tarde para acompanhar as próximas partidas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveMatches.map(match => (
              <MatchCard 
                key={match.id}
                id={match.id}
                competition={match.competition.name}
                status="live"
                homeTeam={{
                  id: match.homeTeam.id,
                  name: match.homeTeam.name,
                  logo: match.homeTeam.logo,
                  score: match.homeTeam.score
                }}
                awayTeam={{
                  id: match.awayTeam.id,
                  name: match.awayTeam.name,
                  logo: match.awayTeam.logo,
                  score: match.awayTeam.score
                }}
                time={match.time}
                minute={match.minute}
              />
            ))}
          </div>
        )}

        {/* Ad banner */}
        <div className="ad-container h-24 my-8">
          Banner de anúncio 970x90
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveMatches;
