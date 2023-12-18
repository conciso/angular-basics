import {
  ChangeDetectionStrategy,
  Component, computed,
  signal
} from '@angular/core';
import {
  FundamentalNgxCoreModule, ShellbarMenuItem
} from '@fundamental-ngx/core';
import { RouterOutlet } from '@angular/router';
import {
  CustomerIds,
  CustomerMockService, CustomerNames,
  CustomerService
} from '@angular-basics-schulung/common';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    FundamentalNgxCoreModule,
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
  selectedCustomerId = signal<string>(CustomerIds.HeBe);

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

  selectedCustomerName = computed(
    () => CustomerNames.get(this.selectedCustomerId()) as string
  );
}
