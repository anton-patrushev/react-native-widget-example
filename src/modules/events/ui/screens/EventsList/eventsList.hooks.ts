import React from 'react';

import { Event } from 'modules/events/presentation/models/Event';
import { useEventsListPresenter } from 'modules/events/presentation/presenters/EventsListPresenter/EventsListPresenter';

type UseEventsListScreenResult = {
  events: Array<Event>;
};

const INITIAL_EVENTS = [] as Array<Event>;

export function useEventsListScreen(): UseEventsListScreenResult {
  const eventsListPresenter = useEventsListPresenter();

  const [events, setEvents] = React.useState(INITIAL_EVENTS);

  React.useEffect(() => {
    eventsListPresenter.observeEvents().subscribe(setEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { events };
}
