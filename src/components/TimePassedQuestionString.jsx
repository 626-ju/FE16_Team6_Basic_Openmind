function TimePassedQuestionString({ createdate }) {
  const createDate = new Date(createdate); // API에서 받은 문자열로 Date 객체 생성
  const currentTime = new Date();

  const diffMilliseconds = currentTime.getTime() - createDate.getTime(); // 밀리초 단위 시간 차이

  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  if (diffMilliseconds < MINUTE) {
    // 1분 미만
    return '방금 전';
  } else if (diffMilliseconds < HOUR) {
    // 1시간 미만
    const minutes = Math.floor(diffMilliseconds / MINUTE);
    return `${minutes}분 전`;
  } else if (diffMilliseconds < DAY) {
    // 1일 미만
    const hours = Math.floor(diffMilliseconds / HOUR);
    return `${hours}시간 전`;
  } else if (diffMilliseconds < MONTH) {
    // 1달 미만 (30일 기준으로 대략 계산)
    const days = Math.floor(diffMilliseconds / DAY);
    return `${days}일 전`;
  } else if (diffMilliseconds < YEAR) {
    // 1년 미만 (365일 기준으로 대략 계산)
    const months = Math.floor(diffMilliseconds / MONTH);
    return `${months}달 전`;
  } else {
    // 1년 이상
    const years = Math.floor(diffMilliseconds / YEAR);
    return `${years}년 전`;
  }
}

export default TimePassedQuestionString;
