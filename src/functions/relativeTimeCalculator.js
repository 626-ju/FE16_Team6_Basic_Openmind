export function relativeTimeCalculator(time) {
  const baseTime = new Date(time);
  const currentTime = new Date(Date.now());

  const difference = currentTime - baseTime;

  if (difference <= 1000 || difference < 0) {
    return '지금';
  } else if (difference <= 1000 * 60) {
    return Math.floor(difference / 1000) + '초전';
  } else if (difference <= 1000 * 60 * 60) {
    return Math.floor(difference / (1000 * 60)) + '분전';
  } else if (difference <= 1000 * 60 * 60 * 24) {
    return Math.floor(difference / (1000 * 60 * 60)) + '시간전';
  } else if (difference <= 1000 * 60 * 60 * 24 * 7) {
    return Math.floor(difference / (1000 * 60 * 60 * 24)) + '일전';
  } else {
    return Math.floor(difference / (1000 * 60 * 60 * 24 * 7)) + '주전';
  }
}
