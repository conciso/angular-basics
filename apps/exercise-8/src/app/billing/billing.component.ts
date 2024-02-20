import { Component, inject } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleDirective, IconComponent,
  MenuAddonDirective,
  MenuComponent,
  MenuTriggerDirective,
  SegmentedButtonComponent,
  SelectModule,
  TableComponent,
  TableModule,
  TableRowDirective
} from '@fundamental-ngx/core';
import { FormsModule } from '@angular/forms';
import { FocusableItemDirective } from '@fundamental-ngx/cdk';
import { StateService } from '../state.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SupplyContract } from '../supply-contracts/supply-contracts.type';
import { ContractsService } from '../supply-contracts/contracts.service';

@Component({
  selector: 'abs-billing',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TableComponent,
    TableRowDirective,
    FocusableItemDirective,
    MenuComponent,
    ButtonComponent,
    MenuTriggerDirective,
    MenuAddonDirective,
    TableModule,
    CardTitleDirective,
    FormsModule,
    SegmentedButtonComponent,
    SelectModule,
    AsyncPipe,
    IconComponent
  ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent {

  #stateService = inject(StateService);

  #contractsService = inject(ContractsService);

  selectedContract = this.#stateService.state;

  contracts$ = this.#contractsService.getContracts();
  value = undefined;
  selectedValue!: SupplyContract;

  setContract(contract: SupplyContract) {
    this.#stateService.setState(contract);
  }
}
