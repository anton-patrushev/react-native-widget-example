import { Color } from 'modules/shared/presentation/types/Color';

export type CreateEventForm = {
  title: string;
  description: string;
  color: Color;
  startTime: Date;
  endTime: Date;
};
