import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { computedAsync } from 'ngxtension/computed-async';
import {
  FundamentalNgxCoreModule,
  ShellbarMenuItem,
} from '@fundamental-ngx/core';
import { RouterOutlet } from '@angular/router';
import { ContactInfoCardComponent } from './contact-info/contact-info.component';
import { HistoryCardComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';
import {
  Customer,
  CustomerIds,
  CustomerMockService,
  CustomerNames,
  CustomerService,
} from '@angular-basics-schulung/common';
import { JsonPipe } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { SupplyContractsComponent } from './supply-contracts/supply-contracts.component';
import { AdditionalContractsComponent } from './additional-contracts/additional-contracts.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    FundamentalNgxCoreModule,
    ContactInfoCardComponent,
    SupplyContractsComponent,
    AdditionalContractsComponent,
    BillingComponent,
    HistoryCardComponent,
    FormsModule,
  ],
  providers: [
    {
      provide: CustomerService,
      useClass: CustomerMockService,
    },
  ],
  selector: 'abs-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  #customerService = inject(CustomerService);

  selectedCustomerId = signal<string>(CustomerIds.HeBe);
  selectedCustomerName = computed(
    () => CustomerNames.get(this.selectedCustomerId()) as string
  );
  customer = computedAsync(
    () => this.#customerService.getCustomer(this.selectedCustomerId()),
    { initialValue: {} as Customer }
  );
  consoleEffect = effect(() => {
    console.log(this.customer());
  });

  productMenuItems: ShellbarMenuItem[] = [
    {
      name: CustomerNames.get(CustomerIds.HeBe) as string,
      callback: () => {
        this.selectedCustomerId.set(CustomerIds.HeBe);
      },
    },
    {
      name: CustomerNames.get(CustomerIds.Koenig) as string,
      callback: () => {
        this.selectedCustomerId.set(CustomerIds.Koenig);
      },
    },
  ];

  changeName(name: string) {
    console.log(name);
  }
}

interface AdminData {
  createdBy: string;
  createdOn: string;
  createdByName: string;
  updatedBy: string;
  updatedOn: string;
  updatedByName: string;
  deletedOn: string | null;
  deletedBy: string | null;
  deletedByName: string | null;
  isDeleted: boolean;
}

interface MimeHeaders {
  references: string | null;
  replyTo: string | null;
  inReplyTo: string | null;
  envelopeFrom: string | null;
  autoSubmitted: string | null;
}

interface Mail {
  id: string;
  adminData: AdminData;
  subject: string;
  messageId: string;
  channelId: string;
  from: string;
  richTextPreSignedURL: string;
  richTextDocumentId: string;
  plainContent: string;
  toRecipients: string[];
  richTextScanStatus: string;
  scanStatus: string;
  dataOrigin: string;
  direction: string;
  isDraft: boolean;
  isAutoReply: boolean;
  isBounce: boolean;
  group: string;
  mimeHeaders: MimeHeaders;
  isEndOfPurpose: boolean;
}
