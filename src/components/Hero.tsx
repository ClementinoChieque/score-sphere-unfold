
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-sport-highlight/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-sport-highlight/20 text-sport-highlight text-sm font-medium mb-5">
              A melhor plataforma de resultados esportivos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Acompanhe Jogos em</span>
              <span className="block text-sport-highlight">Tempo Real</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Resultados, estatísticas e previsões de jogos esportivos em tempo real. Tudo o que você precisa em um só lugar.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-sport-highlight text-gray-900 hover:bg-sport-highlight/90">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800">
                Ver Jogos ao Vivo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sport-highlight text-3xl font-bold mb-1">100+</div>
                <div className="text-gray-500 text-sm">Competições</div>
              </div>
              <div>
                <div className="text-sport-highlight text-3xl font-bold mb-1">5K+</div>
                <div className="text-gray-500 text-sm">Jogos mensais</div>
              </div>
              <div>
                <div className="text-sport-highlight text-3xl font-bold mb-1">1M+</div>
                <div className="text-gray-500 text-sm">Usuários</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mt-10 lg:mt-0">
            <div className="glass rounded-xl overflow-hidden shadow-xl border border-gray-800 transform lg:-rotate-2">
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">Score Sphere App</div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Liga dos Campeões</span>
                      <div className="flex items-center gap-1.5">
                        <div className="live-indicator">
                          <span></span>
                          <div></div>
                        </div>
                        <span className="text-sport-live text-xs">AO VIVO</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                        <span className="font-medium">Man City</span>
                      </div>
                      <span className="text-xl font-bold text-sport-highlight">2</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                        <span className="font-medium">Real Madrid</span>
                      </div>
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                      <span>72'</span>
                      <span>Estatísticas</span>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Premier League</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-500 text-xs">HOJE 16:30</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                        <span className="font-medium">Arsenal</span>
                      </div>
                      <span className="text-xl font-bold">-</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                        <span className="font-medium">Liverpool</span>
                      </div>
                      <span className="text-xl font-bold">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-5 glass rounded-lg p-3 border border-gray-800 shadow-lg transform rotate-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-yellow-500 text-gray-900 font-bold text-xs">
                  IA
                </div>
                <div className="text-xs">
                  <div className="font-medium text-white">Previsão IA</div>
                  <div className="text-xs text-gray-400">Man City vencerá (68%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
