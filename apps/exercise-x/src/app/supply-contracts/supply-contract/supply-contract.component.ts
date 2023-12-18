import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarComponent, CardComponent, CardContentComponent, CardHeaderComponent } from '@fundamental-ngx/core';
import { SupplyContract } from '../supply-contracts.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'abs-supply-contract',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    AvatarComponent,
    CardContentComponent,
    DatePipe,
  ],
  templateUrl: './supply-contract.component.html',
  styleUrl: './supply-contract.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupplyContractComponent {
  //contract = input.required<SupplyContract>();

  @Input()
  contract!: SupplyContract;

  @Output()
  contractSelected = new EventEmitter<SupplyContract>();

  selectContract() {
    this.contractSelected.emit(this.contract);
  }
}
