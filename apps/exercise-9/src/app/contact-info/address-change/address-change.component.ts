import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input,
  OnDestroy, Output
} from '@angular/core';
import { Validators } from '@angular/forms';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { Subject, takeUntil } from 'rxjs';
import {
  PlatformWizardGeneratorModule,
  WizardDialogGeneratorService,
  WizardGeneratorFormsValue,
  WizardGeneratorItem,
  WizardTitle,
} from '@fundamental-ngx/platform';
import { Address } from '@angular-basics-schulung/common';
import { AddressChangeEvent } from '../adress-change.type';

@Component({
  selector: 'abs-address-change',
  standalone: true,
  imports: [
    ButtonComponent,
    PlatformWizardGeneratorModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './address-change.component.html',
  styleUrl: './address-change.component.scss',
})
export class AddressChangeComponent implements OnDestroy {

  @Input()
  address: Address | undefined;

  @Output()
  changedAddress = new EventEmitter<AddressChangeEvent>();

  wizardValue: WizardGeneratorFormsValue | undefined;

  wizardTitle: WizardTitle = {
    size: 2,
    text: 'Change Address',
  };

  stepItems: WizardGeneratorItem[] = [
    {
      name: 'Customer information',
      id: 'customerInformationStep',
      formGroups: [
        {
          title: '2. Customer Information',
          id: 'customerInformation',
          formItems: [
            {
              name: 'street',
              message: 'Straße',
              type: 'input',
              validators: [Validators.required],
            },
            {
              name: 'number',
              message: 'Hausnummer',
              type: 'input',
              validators: [Validators.required],
            },
            {
              name: 'zip',
              message: 'PLZ',
              type: 'input',
              validators: [Validators.required],
            },
            {
              name: 'city',
              message: 'Stadt',
              type: 'input',
              validators: [Validators.required],
            },
          ],
        },
      ],
    },
    {
      name: 'Summary',
      id: 'summary',
      summary: true,
    },
  ];

  /** An RxJS Subject that will kill the data stream upon component’s destruction (for unsubscribing)  */
  private readonly _onDestroy$: Subject<void> = new Subject<void>();

  constructor(private _wizardDialogService: WizardDialogGeneratorService) {}

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  openDialog(): void {
    this._wizardDialogService
      .open({
        width: '100%',
        height: '100%',
        verticalPadding: false,
        data: {
          items: this.stepItems,
          appendToWizard: false,
          displaySummaryStep: true,
          responsivePaddings: true,
          title: this.wizardTitle,
        },
      })
      .afterClosed.pipe(takeUntil(this._onDestroy$))
      .subscribe((wizardValue) => {
        this.wizardValue = wizardValue;
      });
  }

  wizardFinished(wizardValue: WizardGeneratorFormsValue): void {
    this.wizardValue = wizardValue;
  }
}
