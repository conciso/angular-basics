export interface SupplyContract {
  title: string;
  glyph: string;
  address: string;
  duration: Duration;
}

export interface Duration {
  from: Date;
  to: Date;
}
