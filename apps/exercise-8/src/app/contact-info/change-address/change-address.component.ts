import { CommonModule } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/overlay';
import {
  Component, EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BarModule } from '@fundamental-ngx/core/bar';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { CheckboxComponent } from '@fundamental-ngx/core/checkbox';
import { DialogModule, DialogRef, DialogService, DialogTemplateDirective } from '@fundamental-ngx/core/dialog';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';
import { TitleComponent } from '@fundamental-ngx/core/title';
import { InputComponent } from '@fundamental-ngx/platform';
import { FormLabelComponent } from '@fundamental-ngx/core';
import { Address } from '@angular-basics-schulung/common';
import { AddressChangeEvent } from '../adress-change.type';

@Component({
  selector: 'abs-change-address',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    BarModule,
    TitleComponent,
    CdkScrollable,
    ScrollbarDirective,
    CheckboxComponent,
    ReactiveFormsModule,
    ButtonComponent,
    DialogTemplateDirective,
    InputComponent,
    FormLabelComponent
  ],
  templateUrl: './change-address.component.html',
  styleUrl: './change-address.component.css'
})
export class ChangeAddressComponent {
  @Input()
  address: Address | undefined;

  @Output()
  changedAddress = new EventEmitter<AddressChangeEvent>();

  #dialogService = inject(DialogService);
  #formBuilder = inject(FormBuilder);

  addressGroup = this.#formBuilder.group({
    street: ['', Validators.required],
    number: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required]
  });

  dialogRef!: DialogRef;
  openDialog(dialog: TemplateRef<any>): void {
    this.dialogRef = this.#dialogService.open(dialog, {
      focusTrapped: true
    });

    this.dialogRef.afterClosed.subscribe(
      (result) => {
        console.log(this.addressGroup.getRawValue());
      }
    );
  }

  onSubmit() {
    this.dialogRef.close(this.addressGroup.getRawValue())
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
