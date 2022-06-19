import format from 'date-fns/format';

export function formatEventTime(time: Date): string {
  return format(time, 'dd MMM yyyy, p');
}
