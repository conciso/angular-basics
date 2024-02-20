import { Injectable } from '@angular/core';
import { SupplyContract } from './supply-contracts.type';
import { SUPPLY_CONTRACTS } from '@angular-basics-schulung/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  getContracts(): Observable<SupplyContract[]> {
    return of(SUPPLY_CONTRACTS as SupplyContract[]);
  }
}
