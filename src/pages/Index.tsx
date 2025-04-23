
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BarChart, Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import MatchCard from '@/components/MatchCard';
import { getLiveMatches, getUpcomingMatches } from '@/lib/mockData';

const Index = () => {
  const liveMatches = getLiveMatches();
  const upcomingMatches = getUpcomingMatches().slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Anúncio principal */}
        <div className="ad-container h-24 max-w-6xl mx-auto">
          Banner de anúncio 970x90
        </div>

        {/* Ao vivo section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="live-indicator">
                  <span></span>
                  <div></div>
                </div>
                <h2 className="text-2xl font-heading font-bold text-white">Ao Vivo</h2>
              </div>
              <Link to="/live" className="text-sport-highlight hover:text-sport-highlight/80 flex items-center gap-1 text-sm font-medium">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          </div>
        </section>

        {/* Anúncio em meio */}
        <div className="ad-container h-16 max-w-4xl mx-auto">
          Banner de anúncio 728x90
        </div>

        {/* Próximos jogos */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-white">Próximos Jogos</h2>
              <Link to="/schedule" className="text-sport-highlight hover:text-sport-highlight/80 flex items-center gap-1 text-sm font-medium">
                Ver calendário <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingMatches.map(match => (
                <MatchCard 
                  key={match.id}
                  id={match.id}
                  competition={match.competition.name}
                  status="upcoming"
                  homeTeam={{
                    id: match.homeTeam.id,
                    name: match.homeTeam.name,
                    logo: match.homeTeam.logo
                  }}
                  awayTeam={{
                    id: match.awayTeam.id,
                    name: match.awayTeam.name,
                    logo: match.awayTeam.logo
                  }}
                  time={match.time}
                  date={match.date}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Por que usar o <span className="text-sport-highlight">Score Sphere</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nossa plataforma oferece as melhores ferramentas para acompanhar seus esportes favoritos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                title="Resultados em tempo real"
                description="Acompanhe placar, estatísticas e eventos importantes de jogos ao vivo com atualizações instantâneas."
                icon={<Calendar className="h-6 w-6" />}
              />
              <FeatureCard 
                title="Estatísticas detalhadas"
                description="Analise dados avançados como posse de bola, chutes, faltas, cartões e muito mais."
                icon={<BarChart className="h-6 w-6" />}
              />
              <FeatureCard 
                title="Alertas personalizados"
                description="Configure notificações para seus times e jogos favoritos e não perca nenhum momento importante."
                icon={<Bell className="h-6 w-6" />}
              />
              <FeatureCard 
                title="Previsões com IA"
                description="Nossa inteligência artificial analisa dados históricos para fazer previsões precisas de resultados."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-sport-highlight text-gray-900 hover:bg-sport-highlight/90">
                Experimente Grátis
              </Button>
            </div>
          </div>
        </section>

        {/* Anúncio inferior */}
        <div className="ad-container h-24 max-w-6xl mx-auto my-8">
          Banner de anúncio 970x90
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
