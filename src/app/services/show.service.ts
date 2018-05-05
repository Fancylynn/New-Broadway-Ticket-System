import { Injectable } from '@angular/core';
import { Show } from '../models/show';
import { SHOWS } from '../mock-shows';

@Injectable()
export class ShowService {

  constructor() { }

  getShows(): Show[] {
    return SHOWS;
  }
}
