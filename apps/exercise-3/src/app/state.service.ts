import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { initialState, SupplyContractState } from './state.type';
import { SupplyContract } from './supply-contracts/supply-contracts.type';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state: BehaviorSubject<SupplyContractState>;

  constructor() {
    this._state = new BehaviorSubject<SupplyContractState>(initialState);
  }

  get state$(): Observable<SupplyContractState> {
    return this._state.asObservable();
  }

  get state(): SupplyContractState {
    return this._state.getValue();
  }

  setState(
    contract: SupplyContract | undefined
  ): void {
    this._state.next({ contract: contract });
  }

  select<K>(selector: (state: SupplyContractState) => K): Observable<K> {
    return this.state$.pipe(
      map(selector),
      distinctUntilChanged()
    );
  }
}
