import format from 'date-fns/format';

export function formatEventDuration(time: Date): string {
  return format(time, 'p');
}
