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
  ['2º Grupo A', '2º Grupo B'],
  ['1º Grupo E', '3º Grupo A/B/C/D/F'],
  ['1º Grupo F', '2º Grupo C'],
  ['1º Grupo C', '3º Grupo F/G/H/I/J'],
  ['2º Grupo E', '2º Grupo I'],
  ['1º Grupo A', '3º Grupo C/E/F/H/I'],
  ['1º Grupo L', '3º Grupo E/H/I/J/K'],
  ['1º Grupo D', '3º Grupo B/E/F/I/J'],
  ['1º Grupo G', '3º Grupo A/E/H/I/J'],
  ['2º Grupo K', '2º Grupo L'],
  ['1º Grupo H', '3º Grupo A/B/C/G/I'],
  ['1º Grupo B', '3º Grupo E/F/G/I/J'],
  ['2º Grupo D', '2º Grupo G'],
  ['1º Grupo I', '3º Grupo C/D/F/G/H'],
  ['1º Grupo J', '2º Grupo H'],
  ['1º Grupo K', '3º Grupo D/E/I/J/L'],
] as const;

const roundOf32Matches = roundOf32Pairings.map(([homeTeam, awayTeam], index) =>
  createMatch({
    codeNumber: 73 + index,
    homeTeam,
    awayTeam,
    startsAt: createStartsAt(2026, 6, 28 + Math.floor(index / 4), slotTimes[index % 4]),
    phase: '16 avos de final',
  }),
);

const roundOf16Matches = Array.from({ length: 8 }, (_, index) =>
  createMatch({
    codeNumber: 89 + index,
    homeTeam: `Vencedor Jogo ${73 + index * 2}`,
    awayTeam: `Vencedor Jogo ${74 + index * 2}`,
    startsAt: createStartsAt(2026, 7, 4 + Math.floor(index / 2), slotTimes[index % 2 === 0 ? 1 : 2]),
    phase: 'Oitavas de final',
  }),
);

const quarterFinalMatches = Array.from({ length: 4 }, (_, index) =>
  createMatch({
    codeNumber: 97 + index,
    homeTeam: `Vencedor Jogo ${89 + index * 2}`,
    awayTeam: `Vencedor Jogo ${90 + index * 2}`,
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
