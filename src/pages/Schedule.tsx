
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Calendar from '@/components/Calendar';
import MatchCard from '@/components/MatchCard';
import { getMatchesByDate, getUpcomingMatches } from '@/lib/mockData';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const matchesForDate = getMatchesByDate(selectedDate);
  const upcomingMatches = getUpcomingMatches();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Calendário de Jogos</h1>
        <p className="text-gray-400 mb-8">Visualize jogos por data e acompanhe seu time favorito.</p>
        
        {/* Ad banner */}
        <div className="ad-container h-24 mb-8">
          Banner de anúncio 970x90
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            
            <div>
              <h2 className="text-xl font-medium text-white mb-4">
                Jogos em {format(selectedDate, "d 'de' MMMM", { locale: ptBR })}
              </h2>
              
              {matchesForDate.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-gray-800 rounded-xl">
                  <svg className="h-16 w-16 mx-auto text-gray-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-white mb-2">Nenhum jogo programado</h3>
                  <p className="text-gray-400">Não há partidas agendadas para esta data.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {matchesForDate.map(match => (
                    <MatchCard 
                      key={match.id}
                      id={match.id}
                      competition={match.competition.name}
                      status={match.status as any}
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
                      date={match.date}
                      minute={match.minute}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            {/* Side banner ad */}
            <div className="ad-container h-80 mb-6">
              Banner de anúncio 300x250
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-medium text-white">Próximos Jogos</h3>
              </div>
              <div className="p-4 space-y-4">
                {upcomingMatches.slice(0, 5).map(match => (
                  <div key={match.id} className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-xs text-gray-400 mb-2">{match.competition.name} • {match.date}</div>
                    <div className="flex items-center gap-2">
                      <img 
                        src={match.homeTeam.logo} 
                        alt={match.homeTeam.name} 
                        className="h-5 w-5 object-contain" 
                      />
                      <span className="text-sm text-white">{match.homeTeam.name}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <img 
                        src={match.awayTeam.logo} 
                        alt={match.awayTeam.name} 
                        className="h-5 w-5 object-contain" 
                      />
                      <span className="text-sm text-white">{match.awayTeam.name}</span>
                    </div>
                  </div>
                ))}
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

export default Schedule;
