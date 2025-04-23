
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface MatchDetailProps {
  match: any; // Usaria um tipo mais específico em produção
}

const MatchDetail: React.FC<MatchDetailProps> = ({ match }) => {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      {/* Header com competição e status */}
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src={match.competition.logo} 
            alt={match.competition.name}
            className="h-6 w-6 object-contain" 
          />
          <span className="text-white font-medium">{match.competition.name}</span>
        </div>
        {match.status === 'live' ? (
          <div className="flex items-center gap-1.5">
            <div className="live-indicator">
              <span></span>
              <div></div>
            </div>
            <span className="text-sport-live text-xs">AO VIVO {match.minute}'</span>
          </div>
        ) : match.status === 'finished' ? (
          <span className="text-gray-400 text-sm">Finalizado</span>
        ) : (
          <span className="text-gray-400 text-sm">{match.date} • {match.time}</span>
        )}
      </div>

      {/* Placar do jogo */}
      <div className="py-8 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-2 flex flex-col items-center">
            <img 
              src={match.homeTeam.logo} 
              alt={match.homeTeam.name}
              className="h-20 w-20 object-contain mb-3" 
            />
            <span className="font-heading font-semibold text-lg text-white text-center">
              {match.homeTeam.name}
            </span>
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className={`text-5xl font-bold ${
                  match.status === 'live' && match.homeTeam.score > match.awayTeam.score 
                    ? 'text-sport-highlight' 
                    : 'text-white'
                }`}>
                  {match.status === 'upcoming' ? '-' : match.homeTeam.score}
                </span>
                <span className="mx-3 text-4xl font-light text-gray-500">:</span>
                <span className={`text-5xl font-bold ${
                  match.status === 'live' && match.awayTeam.score > match.homeTeam.score 
                    ? 'text-sport-highlight' 
                    : 'text-white'
                }`}>
                  {match.status === 'upcoming' ? '-' : match.awayTeam.score}
                </span>
              </div>
              {match.status === 'finished' && match.halfTimeScore && (
                <div className="text-sm text-gray-500 mt-2">
                  Intervalo: {match.halfTimeScore.home} - {match.halfTimeScore.away}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center">
            <img 
              src={match.awayTeam.logo} 
              alt={match.awayTeam.name}
              className="h-20 w-20 object-contain mb-3" 
            />
            <span className="font-heading font-semibold text-lg text-white text-center">
              {match.awayTeam.name}
            </span>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      {match.status !== 'upcoming' && match.stats && (
        <div className="p-6 border-t border-gray-800">
          <h3 className="font-medium text-white mb-4">Estatísticas</h3>
          
          <div className="space-y-4">
            {/* Posse de bola */}
            <div className="grid grid-cols-9 items-center">
              <div className="col-span-2 text-right pr-2 text-white">{match.stats.possession.home}%</div>
              <div className="col-span-5">
                <div className="flex h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="bg-sport-highlight h-full" 
                    style={{ width: `${match.stats.possession.home}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 text-center mt-1">Posse de bola</div>
              </div>
              <div className="col-span-2 text-left pl-2 text-white">{match.stats.possession.away}%</div>
            </div>
            
            {/* Chutes */}
            <div className="grid grid-cols-9 items-center">
              <div className="col-span-2 text-right pr-2 text-white">{match.stats.shots.home}</div>
              <div className="col-span-5">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Finalizações</span>
                  <span>No gol: {match.stats.shotsOnTarget.home}-{match.stats.shotsOnTarget.away}</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-sport-highlight h-full"
                    style={{ 
                      width: `${match.stats.shots.home / (match.stats.shots.home + match.stats.shots.away) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-span-2 text-left pl-2 text-white">{match.stats.shots.away}</div>
            </div>
            
            {/* Escanteios */}
            <div className="grid grid-cols-9 items-center">
              <div className="col-span-2 text-right pr-2 text-white">{match.stats.corners.home}</div>
              <div className="col-span-5">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-sport-highlight h-full"
                    style={{ 
                      width: `${match.stats.corners.home / (match.stats.corners.home + match.stats.corners.away) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 text-center mt-1">Escanteios</div>
              </div>
              <div className="col-span-2 text-left pl-2 text-white">{match.stats.corners.away}</div>
            </div>
            
            {/* Faltas */}
            <div className="grid grid-cols-9 items-center">
              <div className="col-span-2 text-right pr-2 text-white">{match.stats.fouls.home}</div>
              <div className="col-span-5">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-sport-highlight h-full"
                    style={{ 
                      width: `${match.stats.fouls.home / (match.stats.fouls.home + match.stats.fouls.away) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 text-center mt-1">Faltas</div>
              </div>
              <div className="col-span-2 text-left pl-2 text-white">{match.stats.fouls.away}</div>
            </div>
            
            {/* Cartões */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-2">
                  <div className="h-5 w-3 bg-yellow-400"></div>
                  <span className="text-white">{match.stats.yellowCards.home} - {match.stats.yellowCards.away}</span>
                </div>
                <span className="text-xs text-gray-400">Amarelos</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-2">
                  <div className="h-5 w-3 bg-red-500"></div>
                  <span className="text-white">{match.stats.redCards.home} - {match.stats.redCards.away}</span>
                </div>
                <span className="text-xs text-gray-400">Vermelhos</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  <span className="text-white">{match.stats.offsides?.home || 0} - {match.stats.offsides?.away || 0}</span>
                </div>
                <span className="text-xs text-gray-400">Impedimentos</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Previsão IA */}
      {match.status !== 'finished' && match.prediction && (
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-yellow-500 text-gray-900 font-bold text-xs">
              IA
            </div>
            <h3 className="font-medium text-white">Previsão</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="glass p-3 rounded-lg">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">{match.prediction.homeWin}%</span>
                <span className="text-xs text-gray-400 mt-1">Vitória {match.homeTeam.name}</span>
              </div>
            </div>
            <div className="glass p-3 rounded-lg">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">{match.prediction.draw}%</span>
                <span className="text-xs text-gray-400 mt-1">Empate</span>
              </div>
            </div>
            <div className="glass p-3 rounded-lg">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">{match.prediction.awayWin}%</span>
                <span className="text-xs text-gray-400 mt-1">Vitória {match.awayTeam.name}</span>
              </div>
            </div>
          </div>
          
          <div className="glass p-3 rounded-lg mt-4">
            <span className="text-sm text-gray-300">{match.prediction.comment}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDetail;
