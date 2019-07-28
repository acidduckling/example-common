import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lodgement } from '@frl/common/model/lodgement.interface';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import { Criteria, LodgementApiState, Pagination } from './api.interfaces';

let _state: LodgementApiState = {
  lodgements: [] as Lodgement[],
  criteria: null,
  pagination: {
    page: 0,
    size: 20,
  },
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private store = new BehaviorSubject<LodgementApiState>(_state);
  private state$ = this.store.asObservable();

  criteria$ = this.state$.pipe(map(state => state.criteria, distinctUntilChanged()));
  pagination$ = this.state$.pipe(map(state => state.pagination, distinctUntilChanged()));
  lodgements$ = this.state$.pipe(map(state => state.lodgements, distinctUntilChanged()));

  constructor(private http: HttpClient, private config: ConfigService) {
    combineLatest(this.criteria$, this.pagination$)
      .pipe(
        switchMap(([criteria, pagination]) => {
          return this.getLodgements(criteria, pagination);
        }),
      )
      .subscribe(lodgements => {
        this.store.next((_state = { ..._state, lodgements }));
      });
  }

  getLodgements(criteria: Criteria, pagination: Pagination): Observable<Lodgement[]> {
    const apiUrl = this.buildApiRoute(criteria, pagination);
    return this.http.get<Lodgement[]>(apiUrl);
  }

  updateCriteria(page: number, size: number) {
    const pagination: Pagination = { ..._state.pagination, page, size };
    this.store.next((_state = { ..._state, pagination }));
  }

  private buildApiRoute(criteria: Criteria, pagination: Pagination): string {
    let query = '';

    const base = `${this.config.env.apiEndpoint}lodgements`;
    if (criteria && criteria.value && criteria.name) {
      query += `${criteria.name}=${criteria.value}`;
    }
    if (pagination) {
      const paginationQuery = `_page=${pagination.page}&_limit=${pagination.size || 10}`;
      query = query ? `${query}&${paginationQuery}` : paginationQuery;
    }

    return query ? `${base}?${query}` : base;
  }
}
