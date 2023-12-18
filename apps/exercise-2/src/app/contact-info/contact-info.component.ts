import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'abs-contact-info',
  standalone: true,
  imports: [FundamentalNgxCoreModule, JsonPipe],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoCardComponent {
}
