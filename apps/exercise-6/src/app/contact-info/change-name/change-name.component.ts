import { Component, EventEmitter, inject, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonBarComponent,
  ButtonComponent,
  DialogBodyComponent,
  DialogComponent,
  DialogFooterComponent, DialogHeaderComponent, FormLabelComponent, TitleComponent
} from '@fundamental-ngx/core';
import { DialogRef, DialogService } from '@fundamental-ngx/core/dialog';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@fundamental-ngx/platform';

@Component({
  selector: 'abs-change-name',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ButtonBarComponent, DialogBodyComponent, DialogComponent, DialogFooterComponent, DialogHeaderComponent, FormLabelComponent, FormsModule, InputComponent, TitleComponent],
  templateUrl: './change-name.component.html',
  styleUrl: './change-name.component.scss',
})
export class ChangeNameComponent {

  @Input({required: true})
  nameToChange!: string;

  @Output()
  changeName = new EventEmitter<string>();

  #dialogService = inject(DialogService);

  dialogRef!: DialogRef;
  openDialog(dialog: TemplateRef<any>): void {
    this.dialogRef = this.#dialogService.open(dialog, {
      focusTrapped: true
    });
  }

  onSubmit(name: string) {
    this.dialogRef.close(name);
    this.changeName.emit(name);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
