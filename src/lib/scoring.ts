export type ScoringPrediction = {
  homeScore: number;
  awayScore: number;
};

export type ScoringMatch = {
  homeScore: number | null;
  awayScore: number | null;
};

export function calculatePredictionPoints(prediction: ScoringPrediction, match: ScoringMatch) {
  if (match.homeScore === null || match.awayScore === null) {
    return 0;
  }

  if (isExactScore(prediction, match)) {
    return 10;
  }

  let points = 0;

  if (getOutcome(prediction.homeScore, prediction.awayScore) === getOutcome(match.homeScore, match.awayScore)) {
    points += 100;
  }

  if (prediction.homeScore === match.homeScore) {
    points += 2;
  }

  if (prediction.awayScore === match.awayScore) {
    points += 2;
  }

  return points;
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
