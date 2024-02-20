import { Component, input } from '@angular/core';
import {
  AvatarComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
} from '@fundamental-ngx/core';
import { AdditionalContract } from '../additional-contracts.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'abs-contract-card',
  standalone: true,
  imports: [
    AvatarComponent,
    CardComponent,
    CardContentComponent,
    CardHeaderComponent,
    DatePipe,
  ],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss',
})
export class ContractComponent {
  contract = input.required<AdditionalContract>();
}
