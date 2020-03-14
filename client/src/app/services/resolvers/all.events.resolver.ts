import {Resolve, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {EventService} from '../managers/event.service';
import {Event} from '../../models/Event';

@Injectable()
export class AllEventsResolver implements Resolve<Event[]> {
  constructor(private eventService: EventService) {}

  // @ts-ignore
  resolve(route: ActivatedRoute, state: RouterStateSnapshot): Observable<Event[]> {
    return this.eventService.getAllEvents();
  }

}
