import { isBeforeForMoreThanOneHour } from 'modules/events/ui/screens/CreateEvent/createEvent.utils';

describe('createEvent.utils', () => {
  describe('isBeforeForMoreThanOneHour', () => {
    it('should return `true` for more than 1 hour difference', () => {
      const startDate = new Date('2022-06-29T13:48:11.000Z');
      const endDate = new Date('2022-06-29T16:48:11.000Z');

      expect(isBeforeForMoreThanOneHour(startDate, endDate)).toBe(true);
    });
    it('should return `false` for less than 1 hour difference', () => {
      const startDate = new Date('2022-06-29T13:48:11.000Z');
      const endDate = new Date('2022-06-29T14:47:11.000Z');

      expect(isBeforeForMoreThanOneHour(startDate, endDate)).toBe(false);
    });
    it('should return `false` for more than 1 hour difference', () => {
      const startDate = new Date('2022-06-29T13:48:11.000Z');
      const endDate = new Date('2022-06-29T11:48:11.000Z');

      expect(isBeforeForMoreThanOneHour(startDate, endDate)).toBe(false);
    });
  });
});
