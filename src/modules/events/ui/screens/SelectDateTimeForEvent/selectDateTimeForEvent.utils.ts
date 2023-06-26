import addMinutes from 'date-fns/addMinutes';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import subtractMinutes from 'date-fns/subMinutes';

export function addOneMinute(date: Date): Date {
  return addMinutes(date, 1);
}

export function subtractOneMinute(date: Date): Date {
  return subtractMinutes(date, 1);
}

export function isBeforeForMoreThanOneMinute(
  date: Date,
  compareDate: Date,
): boolean {
  return !isAfter(date, subtractMinutes(compareDate, 1));
}

export function isAfterForLessThanOneMinute(
  date: Date,
  compareDate: Date,
): boolean {
  return !isBefore(date, addMinutes(compareDate, 1));
}
