export type Match = {
  id: string;
  group: string;
  home: string;
  away: string;
  date: string;
  venue: string;
  status: 'aberto' | 'encerrado' | 'finalizado';
  score?: string;
};

export type Guess = {
  id: string;
  match: string;
  guess: string;
  points: number;
  status: 'registrado' | 'pontuado' | 'aguardando';
};

export type RankingUser = {
  position: number;
  name: string;
  department: string;
  points: number;
  exact: number;
};

export const matches: Match[] = [
  {
    id: '1',
    group: 'Grupo A',
    home: 'Brasil',
    away: 'Marrocos',
    date: '12 jun, 16:00',
    venue: 'Cidade do México',
    status: 'aberto',
  },
  {
    id: '2',
    group: 'Grupo B',
    home: 'Argentina',
    away: 'Japão',
    date: '13 jun, 13:00',
    venue: 'Los Angeles',
    status: 'aberto',
  },
  {
    id: '3',
    group: 'Grupo C',
    home: 'Portugal',
    away: 'Gana',
    date: '14 jun, 19:00',
    venue: 'Toronto',
    status: 'encerrado',
  },
  {
    id: '4',
    group: 'Grupo D',
    home: 'França',
    away: 'Coreia do Sul',
    date: '15 jun, 15:00',
    venue: 'Vancouver',
    status: 'finalizado',
    score: '2 x 1',
  },
];

export const guesses: Guess[] = [
  { id: '1', match: 'Brasil x Marrocos', guess: '2 x 0', points: 0, status: 'registrado' },
  { id: '2', match: 'Argentina x Japão', guess: '1 x 1', points: 0, status: 'aguardando' },
  { id: '3', match: 'França x Coreia do Sul', guess: '2 x 1', points: 5, status: 'pontuado' },
];

export const ranking: RankingUser[] = [
  { position: 1, name: 'Ana Paula', department: 'Caixa', points: 34, exact: 4 },
  { position: 2, name: 'Rafael Lima', department: 'Padaria', points: 29, exact: 3 },
  { position: 3, name: 'Marina Souza', department: 'Hortifruti', points: 26, exact: 3 },
  { position: 4, name: 'Carlos Nunes', department: 'Estoque', points: 21, exact: 2 },
];
