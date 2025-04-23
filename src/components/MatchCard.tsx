
import React from 'react';
import { Link } from 'react-router-dom';

interface Team {
  id: string;
  name: string;
  logo: string;
  score?: number;
}

interface MatchCardProps {
  id: string;
  competition: string;
  status: 'live' | 'upcoming' | 'finished';
  homeTeam: Team;
  awayTeam: Team;
  time: string;
  date?: string;
  minute?: number;
}

const MatchCard: React.FC<MatchCardProps> = ({ 
  id, competition, status, homeTeam, awayTeam, time, date, minute 
}) => {
  return (
    <Link to={`/match/${id}`}>
      <div className="bg-gray-900 hover:bg-gray-800/80 rounded-lg p-4 border border-gray-800 transition-colors">
        <div className="flex justify-between mb-3">
          <span className="text-sm text-gray-400">{competition}</span>
          {status === 'live' ? (
            <div className="flex items-center gap-1.5">
              <div className="live-indicator">
                <span></span>
                <div></div>
              </div>
              <span className="text-sport-live text-xs">AO VIVO</span>
            </div>
          ) : status === 'finished' ? (
            <span className="text-gray-500 text-xs">FINALIZADO</span>
          ) : (
            <span className="text-gray-500 text-xs">{date} • {time}</span>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img 
              src={homeTeam.logo} 
              alt={homeTeam.name} 
              className="h-8 w-8 object-contain bg-gray-800 rounded-full p-1"
            />
            <span className="font-medium text-white">{homeTeam.name}</span>
          </div>
          <span className={`text-lg font-bold ${status === 'live' && homeTeam.score && homeTeam.score > (awayTeam.score || 0) ? 'text-sport-highlight' : 'text-white'}`}>
            {status === 'upcoming' ? '-' : homeTeam.score}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={awayTeam.logo} 
              alt={awayTeam.name} 
              className="h-8 w-8 object-contain bg-gray-800 rounded-full p-1"
            />
            <span className="font-medium text-white">{awayTeam.name}</span>
          </div>
          <span className={`text-lg font-bold ${status === 'live' && awayTeam.score && awayTeam.score > (homeTeam.score || 0) ? 'text-sport-highlight' : 'text-white'}`}>
            {status === 'upcoming' ? '-' : awayTeam.score}
          </span>
        </div>
        
        {status === 'live' && minute !== undefined && (
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">{minute}'</span>
            <span className="text-xs text-sport-highlight hover:underline">Estatísticas</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MatchCard;
