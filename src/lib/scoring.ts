export type ScoringPrediction = {
  homeScore: number;
  awayScore: number;
};

export type ScoringMatch = {
  homeScore: number | null;
  awayScore: number | null;
};

export const EXACT_SCORE_POINTS = 150;
export const OUTCOME_POINTS = 100;

export function calculatePredictionPoints(prediction: ScoringPrediction, match: ScoringMatch) {
  if (match.homeScore === null || match.awayScore === null) {
    return 0;
  }

  if (isExactScore(prediction, match)) {
    return EXACT_SCORE_POINTS;
  }

  if (getOutcome(prediction.homeScore, prediction.awayScore) === getOutcome(match.homeScore, match.awayScore)) {
    return OUTCOME_POINTS;
  }

  return 0;
}

export function isExactScore(prediction: ScoringPrediction, match: ScoringMatch) {
  return prediction.homeScore === match.homeScore && prediction.awayScore === match.awayScore;
}

export function isWinnerHit(prediction: ScoringPrediction, match: ScoringMatch) {
  if (match.homeScore === null || match.awayScore === null) {
    return false;
  }

  return getOutcome(prediction.homeScore, prediction.awayScore) === getOutcome(match.homeScore, match.awayScore);
}

function getOutcome(homeScore: number, awayScore: number) {
  if (homeScore > awayScore) {
    return 'home';
  }

  if (awayScore > homeScore) {
    return 'away';
  }

  return 'draw';
}
