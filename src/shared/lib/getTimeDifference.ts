import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * 두 날짜 사이의 시간 차이를 계산하고, 그 결과를 문자열로 반환합니다.
 * 결과는 "N year(s) ago", "N month(s) ago", 또는 "N day(s) ago" 형식입니다.
 *
 * @param given - 비교할 과거 날짜 (문자열 또는 Date 객체)
 * @param current - 기준이 되는 현재 날짜 (문자열 또는 Date 객체). 기본값은 함수 호출 시점의 날짜입니다.
 * @returns 두 날짜 사이의 차이를 나타내는 문자열
 */
export const getTimeDifference = (
  given: string | Date,
  current: string | Date = new Date()
): string => {
  const givenDate = dayjs(given);
  const currentDate = dayjs(current);

  const years = currentDate.diff(givenDate, 'year');
  const months = currentDate.diff(givenDate, 'month');
  const days = currentDate.diff(givenDate, 'day');

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
};
