export interface AdditionalContract {
  title: string;
  serialNumber: string;
  glyph: string;
  duration: Duration;
}

export interface Duration {
  from: Date;
  to: Date;
}
