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
import {
  Customer,
  CustomerIds,
  CustomerMockService,
  CustomerNames,
  CustomerService,
} from '@angular-basics-schulung/common';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    FundamentalNgxCoreModule,
    ContactInfoCardComponent,
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
}
