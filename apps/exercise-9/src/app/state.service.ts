import { Injectable, Signal, signal } from '@angular/core';
import { SupplyContract } from './supply-contracts/supply-contracts.type';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state = signal<SupplyContract>({
    glyph: '', title: '', address: '', duration: { from: new Date(), to: new Date() }
  });

  get state(): Signal<SupplyContract> {
    return this._state.asReadonly();
  }

  setState(
    contract: SupplyContract
  ): void {
    this._state.set(contract);
  }
}
