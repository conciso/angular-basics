import { Component, Input, input } from '@angular/core';
import {
  AvatarComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleDirective,
  ScrollbarDirective,
  TimelineComponent,
  TimelineHeaderInfoSubTitleDirective,
  TimelineNodeBodyComponent,
  TimelineNodeComponent,
  TimelineNodeDefDirective,
  TimelineNodeFooterComponent,
  TimelineNodeHeaderDirective,
  TimelineNodeHeaderInfoDirective,
  TimelineNodeHeaderInfoTextDirective,
  TimelineNodeHeaderInfoTitleDirective,
} from '@fundamental-ngx/core';
import { DatePipe, NgIf } from '@angular/common';
import { HistoryEntry } from '@angular-basics-schulung/common';

// Generics
export function coerceArray<T>(value: undefined | T[]): T[];
export function coerceArray<T>(value: undefined | T[]): T[] {
  return value === undefined ? [] : value;
}

@Component({
  selector: 'abs-history',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TimelineComponent,
    TimelineNodeComponent,
    TimelineNodeHeaderDirective,
    AvatarComponent,
    TimelineNodeHeaderInfoDirective,
    TimelineNodeBodyComponent,
    TimelineNodeFooterComponent,
    DatePipe,
    TimelineNodeDefDirective,
    CardTitleDirective,
    ScrollbarDirective,
    TimelineNodeHeaderInfoTitleDirective,
    TimelineNodeHeaderInfoTextDirective,
    TimelineHeaderInfoSubTitleDirective,
    NgIf
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryCardComponent {
  ticketHistoryEntries = input([], {
    transform: coerceArray<HistoryEntry | undefined>,
  });
}
