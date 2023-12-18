import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { Customer } from '@angular-basics-schulung/common';
import { JsonPipe } from '@angular/common';
import { AddressChangeComponent } from './address-change/address-change.component';
import { ChangeAddressComponent } from './change-address/change-address.component';
import { ChangeNameComponent } from './change-name/change-name.component';

@Component({
  selector: 'abs-contact-info',
  standalone: true,
  imports: [FundamentalNgxCoreModule, JsonPipe, AddressChangeComponent, ChangeAddressComponent, ChangeNameComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoCardComponent {
  customer = input.required<Customer>();

  @Output()
  changeName = new EventEmitter<string>();
}
