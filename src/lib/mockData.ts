
export const mockMatches = [
  {
    id: "1",
    competition: {
      id: "ucl",
      name: "Liga dos Campeões",
      logo: "https://logodownload.org/wp-content/uploads/2016/03/uefa-champions-league-logo-0.png"
    },
    status: "live",
    minute: 72,
    date: "2025-04-23",
    time: "16:00",
    homeTeam: {
      id: "mci",
      name: "Man City",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png",
      score: 2
    },
    awayTeam: {
      id: "rma",
      name: "Real Madrid",
      logo: "https://logodownload.org/wp-content/uploads/2016/05/real-madrid-logo.png",
      score: 1
    },
    stats: {
      possession: { home: 58, away: 42 },
      shots: { home: 14, away: 9 },
      shotsOnTarget: { home: 6, away: 3 },
      corners: { home: 7, away: 3 },
      fouls: { home: 8, away: 12 },
      yellowCards: { home: 2, away: 3 },
      redCards: { home: 0, away: 0 },
      offsides: { home: 3, away: 2 }
    },
    prediction: {
      homeWin: 68,
      draw: 22,
      awayWin: 10,
      comment: "O Manchester City está dominando a posse de bola e criando mais chances. Nossa IA prevê uma vitória do time da casa."
    }
  },
  {
    id: "2",
    competition: {
      id: "pl",
      name: "Premier League",
      logo: "https://logodownload.org/wp-content/uploads/2016/03/premier-league-4.png"
    },
    status: "upcoming",
    date: "2025-04-23",
    time: "16:30",
    homeTeam: {
      id: "ars",
      name: "Arsenal",
      logo: "https://logodownload.org/wp-content/uploads/2016/10/arsenal-logo-escudo-0.png"
    },
    awayTeam: {
      id: "liv",
      name: "Liverpool",
      logo: "https://logodownload.org/wp-content/uploads/2016/09/liverpool-fc-logo-0.png"
    },
    prediction: {
      homeWin: 42,
      draw: 25,
      awayWin: 33,
      comment: "Partida muito equilibrada entre dois times de elite da Premier League. O Arsenal leva uma pequena vantagem jogando em casa."
    }
  },
  {
    id: "3",
    competition: {
      id: "laliga",
      name: "La Liga",
      logo: "https://logodownload.org/wp-content/uploads/2018/11/la-liga-espanhola-logo-0.png"
    },
    status: "live",
    minute: 35,
    date: "2025-04-23",
    time: "15:45",
    homeTeam: {
      id: "fcb",
      name: "Barcelona",
      logo: "https://logodownload.org/wp-content/uploads/2015/05/barcelona-logo-0.png",
      score: 0
    },
    awayTeam: {
      id: "atm",
      name: "Atlético Madrid",
      logo: "https://logodownload.org/wp-content/uploads/2018/11/atletico-de-madrid-logo-escudo.png",
      score: 1
    },
    stats: {
      possession: { home: 65, away: 35 },
      shots: { home: 8, away: 4 },
      shotsOnTarget: { home: 2, away: 3 },
      corners: { home: 5, away: 1 },
      fouls: { home: 6, away: 9 },
      yellowCards: { home: 1, away: 2 },
      redCards: { home: 0, away: 0 },
      offsides: { home: 1, away: 0 }
    },
    prediction: {
      homeWin: 52,
      draw: 28,
      awayWin: 20,
      comment: "Apesar do Barcelona estar atrás no placar, as estatísticas favorecem uma virada do time da casa."
    }
  },
  {
    id: "4",
    competition: {
      id: "seriea",
      name: "Serie A",
      logo: "https://logodownload.org/wp-content/uploads/2017/11/serie-a-logo-tim-0.png"
    },
    status: "finished",
    date: "2025-04-22",
    time: "16:00",
    minute: 90,
    homeTeam: {
      id: "juv",
      name: "Juventus",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/juventus-logo-0.png",
      score: 3
    },
    awayTeam: {
      id: "mil",
      name: "Milan",
      logo: "https://logodownload.org/wp-content/uploads/2016/09/milan-logo-escudo-1.png",
      score: 1
    },
    halfTimeScore: { home: 1, away: 1 },
    stats: {
      possession: { home: 52, away: 48 },
      shots: { home: 17, away: 9 },
      shotsOnTarget: { home: 8, away: 2 },
      corners: { home: 9, away: 3 },
      fouls: { home: 10, away: 14 },
      yellowCards: { home: 2, away: 3 },
      redCards: { home: 0, away: 1 },
      offsides: { home: 2, away: 3 }
    }
  },
  {
    id: "5",
    competition: {
      id: "bundesliga",
      name: "Bundesliga",
      logo: "https://logodownload.org/wp-content/uploads/2017/12/bundesliga-logo-0.png"
    },
    status: "upcoming",
    date: "2025-04-24",
    time: "15:30",
    homeTeam: {
      id: "bay",
      name: "Bayern München",
      logo: "https://logodownload.org/wp-content/uploads/2016/08/bayern-munchen-logo-0.png"
    },
    awayTeam: {
      id: "dor",
      name: "Borussia Dortmund",
      logo: "https://logodownload.org/wp-content/uploads/2016/08/borussia-dortmund-logo-escudo-0.png"
    },
    prediction: {
      homeWin: 63,
      draw: 22,
      awayWin: 15,
      comment: "O clássico alemão tem o Bayern como favorito jogando em casa, com histórico recente favorável."
    }
  },
  {
    id: "6",
    competition: {
      id: "ligue1",
      name: "Ligue 1",
      logo: "https://logodownload.org/wp-content/uploads/2019/09/french-ligue-1-logo-0.png"
    },
    status: "upcoming",
    date: "2025-04-23",
    time: "19:45",
    homeTeam: {
      id: "psg",
      name: "PSG",
      logo: "https://logodownload.org/wp-content/uploads/2016/12/paris-saint-germain-logo-0.png"
    },
    awayTeam: {
      id: "mar",
      name: "Marseille",
      logo: "https://logodownload.org/wp-content/uploads/2022/07/olympique-de-marseille-logo-0-1536x1536.png"
    },
    prediction: {
      homeWin: 72,
      draw: 17,
      awayWin: 11,
      comment: "O PSG é favorito no clássico francês, com vantagem técnica e jogando em casa."
    }
  },
  {
    id: "7",
    competition: {
      id: "brasileirao",
      name: "Brasileirão",
      logo: "https://logodownload.org/wp-content/uploads/2017/05/campeonato-brasileiro-logo-0-1536x1536.png"
    },
    status: "live",
    minute: 58,
    date: "2025-04-23",
    time: "20:00",
    homeTeam: {
      id: "fla",
      name: "Flamengo",
      logo: "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-0.png",
      score: 1
    },
    awayTeam: {
      id: "pal",
      name: "Palmeiras",
      logo: "https://logodownload.org/wp-content/uploads/2016/09/palmeiras-logo-escudo.png",
      score: 1
    },
    stats: {
      possession: { home: 48, away: 52 },
      shots: { home: 10, away: 9 },
      shotsOnTarget: { home: 4, away: 3 },
      corners: { home: 5, away: 6 },
      fouls: { home: 11, away: 9 },
      yellowCards: { home: 3, away: 2 },
      redCards: { home: 0, away: 0 },
      offsides: { home: 3, away: 2 }
    },
    prediction: {
      homeWin: 35,
      draw: 42,
      awayWin: 23,
      comment: "Clássico brasileiro muito equilibrado entre dois fortes candidatos ao título."
    }
  },
  {
    id: "8",
    competition: {
      id: "epl",
      name: "Premier League",
      logo: "https://logodownload.org/wp-content/uploads/2016/03/premier-league-4.png"
    },
    status: "upcoming",
    date: "2025-04-24",
    time: "17:00",
    homeTeam: {
      id: "mun",
      name: "Man United",
      logo: "https://logodownload.org/wp-content/uploads/2016/10/manchester-united-logo-0.png"
    },
    awayTeam: {
      id: "che",
      name: "Chelsea",
      logo: "https://logodownload.org/wp-content/uploads/2016/05/chelsea-logo.png"
    },
    prediction: {
      homeWin: 38,
      draw: 33,
      awayWin: 29,
      comment: "Confronto muito equilibrado entre dois tradicionais rivais ingleses."
    }
  }
];

export const getMatch = (id: string) => {
  return mockMatches.find(match => match.id === id);
};

export const getLiveMatches = () => {
  return mockMatches.filter(match => match.status === 'live');
};

export const getMatchesByDate = (date: Date) => {
  const dateString = date.toISOString().split('T')[0];
  return mockMatches.filter(match => match.date === dateString);
};

export const getFinishedMatches = () => {
  return mockMatches.filter(match => match.status === 'finished');
};

export const getUpcomingMatches = () => {
  return mockMatches.filter(match => match.status === 'upcoming');
};
