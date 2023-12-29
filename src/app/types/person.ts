import { Ticket } from './ticket';

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  ticket: Ticket;
}
