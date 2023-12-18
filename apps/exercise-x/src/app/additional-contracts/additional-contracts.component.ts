import { Component } from '@angular/core';
import {
  CardComponent,
  CardContentComponent,
  CardCounterDirective,
  CardDefinitionDirective,
  CardHeaderComponent,
  CardSubtitleDirective,
  CardTitleDirective,
  FixedCardLayoutComponent,
  LayoutGridColDirective,
  LayoutGridComponent,
  LayoutGridRowDirective,
  ListComponent,
  ListItemComponent,
  ListTitleDirective,
  ScrollbarDirective,
} from '@fundamental-ngx/core';
import { ContractComponent } from './contract/contract.component';
import { AdditionalContract } from './additional-contracts.type';

@Component({
  selector: 'abs-additional-contracts-card',
  standalone: true,
  imports: [
    CardComponent,
    CardContentComponent,
    CardCounterDirective,
    CardDefinitionDirective,
    CardHeaderComponent,
    CardSubtitleDirective,
    CardTitleDirective,
    FixedCardLayoutComponent,
    ListComponent,
    ListItemComponent,
    ListTitleDirective,
    ScrollbarDirective,
    LayoutGridComponent,
    LayoutGridColDirective,
    LayoutGridRowDirective,
    ContractComponent,
  ],
  templateUrl: './additional-contracts.component.html',
  styleUrl: './additional-contracts.component.scss',
})
export class AdditionalContractsComponent {
  additionalContracts: AdditionalContract[] = [
    {
      title: 'Reg. Produktion Ladestation',
      serialNumber: '1A2B3C',
      glyph: 'account',
      duration: {
        from: new Date(2023, 3, 5),
        to: new Date(2024, 3, 5),
      },
    },
    {
      title: 'Reg. Produktion ZEV',
      serialNumber: '2G5D3S',
      glyph: 'account',
      duration: {
        from: new Date(2023, 3, 5),
        to: new Date(2024, 3, 5),
      },
    },
  ];
}
