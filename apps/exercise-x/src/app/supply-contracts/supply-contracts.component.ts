import { Component, inject, OnInit } from '@angular/core';
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent
} from '@fundamental-ngx/core';
import { ContactInfoCardComponent } from '../contact-info/contact-info.component';
import { LayoutGridModule } from '@fundamental-ngx/core/layout-grid';
import { SupplyContract } from './supply-contracts.type';
import { SupplyContractComponent } from './supply-contract/supply-contract.component';
import { ContractsService } from './contracts.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'abs-supply-contracts-card',
  standalone: true,
  imports: [
    LayoutGridModule,
    CardComponent,
    CardContentComponent,
    CardHeaderComponent,
    ContactInfoCardComponent,
    SupplyContractComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './supply-contracts.component.html',
  styleUrl: './supply-contracts.component.scss'
})
export class SupplyContractsComponent implements OnInit {
  #contractService = inject(ContractsService);

  supplyContracts!: Observable<SupplyContract[]>;

  ngOnInit() {
    this.supplyContracts = this.#contractService.getContracts();
  }

  notify(event: SupplyContract): void {
    alert(`${event.title} clicked`);
  }
}
