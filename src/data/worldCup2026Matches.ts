type WorldCup2026Match = {
  id: string;
  code: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  startsAt: string;
  phase: string;
  status: 'upcoming';
  homeScore: null;
  awayScore: null;
};

const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const groupPairings = [
  [1, 2],
  [3, 4],
  [1, 3],
  [4, 2],
  [4, 1],
  [2, 3],
] as const;
const slotTimes = ['13:00', '16:00', '19:00', '22:00'];

const groupStageMatches = groupLetters.flatMap((group, groupIndex) =>
  groupPairings.map(([homeSeed, awaySeed], pairingIndex) =>
    createMatch({
      codeNumber: groupIndex * groupPairings.length + pairingIndex + 1,
      homeTeam: `${group}${homeSeed}`,
      awayTeam: `${group}${awaySeed}`,
      startsAt: createStartsAt(2026, 6, 11 + Math.floor((groupIndex * 6 + pairingIndex) / 4), slotTimes[(groupIndex * 6 + pairingIndex) % 4]),
      phase: `Grupo ${group}`,
    }),
  ),
);

const roundOf32Pairings = [
  ['África do Sul', 'Canadá'],
  ['Alemanha', 'Paraguai'],
  ['Países Baixos', 'Marrocos'],
  ['Brasil', 'Japão'],
  ['França', 'Suécia'],
  ['Costa do Marfim', 'Noruega'],
  ['México', 'Equador'],
  ['Inglaterra', 'RD Congo'],
  ['Estados Unidos', 'Bósnia e Herzegovina'],
  ['Bélgica', 'Senegal'],
  ['Portugal', 'Croácia'],
  ['Espanha', 'Áustria'],
  ['Suíça', 'Argélia'],
  ['Argentina', 'Cabo Verde'],
  ['Colômbia', 'Gana'],
  ['Austrália', 'Egito'],
] as const;

const roundOf32Schedule = [
  [6, 28, '15:00'],
  [6, 29, '16:30'],
  [6, 29, '13:00'],
  [6, 29, '21:00'],
  [6, 30, '17:00'],
  [6, 30, '13:00'],
  [6, 30, '21:00'],
  [7, 1, '12:00'],
  [7, 1, '20:00'],
  [7, 1, '16:00'],
  [7, 2, '19:00'],
  [7, 2, '15:00'],
  [7, 2, '23:00'],
  [7, 3, '14:00'],
  [7, 3, '18:00'],
  [7, 3, '21:30'],
] as const;

const roundOf32Matches = roundOf32Pairings.map(([homeTeam, awayTeam], index) =>
  createMatch({
    codeNumber: 73 + index,
    homeTeam,
    awayTeam,
    startsAt: createStartsAt(
      2026,
      roundOf32Schedule[index][0],
      roundOf32Schedule[index][1],
      roundOf32Schedule[index][2],
    ),
    phase: '16 avos de final',
  }),
);

const roundOf16Matches = Array.from({ length: 8 }, (_, index) =>
  createMatch({
    codeNumber: 89 + index,
    homeTeam: `Vencedor Jogo ${[74, 73, 76, 79, 83, 81, 86, 85][index]}`,
    awayTeam: `Vencedor Jogo ${[77, 75, 78, 80, 84, 82, 88, 87][index]}`,
    startsAt: createStartsAt(2026, 7, 4 + Math.floor(index / 2), slotTimes[index % 2 === 0 ? 1 : 2]),
    phase: 'Oitavas de final',
  }),
);

const quarterFinalMatches = Array.from({ length: 4 }, (_, index) =>
  createMatch({
    codeNumber: 97 + index,
    homeTeam: `Vencedor Jogo ${[89, 93, 91, 95][index]}`,
    awayTeam: `Vencedor Jogo ${[90, 94, 92, 96][index]}`,
    startsAt: createStartsAt(2026, 7, 9 + Math.floor(index / 2), slotTimes[index % 2 === 0 ? 1 : 2]),
    phase: 'Quartas de final',
  }),
);

const semiFinalMatches = Array.from({ length: 2 }, (_, index) =>
  createMatch({
    codeNumber: 101 + index,
    homeTeam: `Vencedor Jogo ${97 + index * 2}`,
    awayTeam: `Vencedor Jogo ${98 + index * 2}`,
    startsAt: createStartsAt(2026, 7, 14 + index, '16:00'),
    phase: 'Semifinal',
  }),
);

const finalStageMatches = [
  createMatch({
    codeNumber: 103,
    homeTeam: 'Perdedor Semifinal 1',
    awayTeam: 'Perdedor Semifinal 2',
    startsAt: createStartsAt(2026, 7, 18, '16:00'),
    phase: 'Disputa de 3º lugar',
  }),
  createMatch({
    codeNumber: 104,
    homeTeam: 'Vencedor Jogo 101',
    awayTeam: 'Vencedor Jogo 102',
    startsAt: createStartsAt(2026, 7, 19, '16:00'),
    phase: 'Final',
  }),
];

export const worldCup2026Matches: WorldCup2026Match[] = [
  ...groupStageMatches,
  ...roundOf32Matches,
  ...roundOf16Matches,
  ...quarterFinalMatches,
  ...semiFinalMatches,
  ...finalStageMatches,
];

function createMatch({
  codeNumber,
  homeTeam,
  awayTeam,
  startsAt,
  phase,
}: {
  codeNumber: number;
  homeTeam: string;
  awayTeam: string;
  startsAt: Date;
  phase: string;
}): WorldCup2026Match {
  const code = `match_${String(codeNumber).padStart(3, '0')}`;
  const isoDate = startsAt.toISOString();

  return {
    id: code,
    code,
    homeTeam,
    awayTeam,
    date: isoDate,
    startsAt: isoDate,
    phase,
    status: 'upcoming',
    homeScore: null,
    awayScore: null,
  };
}

function createStartsAt(year: number, month: number, day: number, time: string) {
  const [hours, minutes] = time.split(':').map(Number);

  return new Date(year, month - 1, day, hours, minutes);
}
