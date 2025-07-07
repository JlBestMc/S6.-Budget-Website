export interface Budget {
  id: number;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  selectedServices: number[];
  total: number;
  date:Date;
}
