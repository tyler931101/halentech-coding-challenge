import { Ticket } from '../models/ticket.model';

interface CreateTicketInput {
  customerName: string;
  email: string;
  status?: string;
  notes?: string;
}

class TicketService {
  // Get all tickets
  public static async getAllTickets() {
    try {
      return await Ticket.findAll();
    } catch (error) {
      throw new Error('Error fetching tickets');
    }
  }

  // Get ticket by ID
  public static async getTicketById(ticketId: number) {
    try {
      const ticket = await Ticket.findByPk(ticketId);
      if (!ticket) {
        throw new Error('Ticket not found');
      }
      return ticket;
    } catch (error) {
      throw new Error('Error fetching ticket by ID');
    }
  }

  // Update ticket by ID
  public static async updateTicket(ticketId: number, { status, notes }: { status: string; notes: string }) {
    try {
      const ticket = await Ticket.findByPk(ticketId);
      if (!ticket) {
        throw new Error('Ticket not found');
      }
      ticket.status = status;
      ticket.notes = notes;
      await ticket.save();
      return ticket;
    } catch (error) {
      throw new Error('Error updating ticket');
    }
  }

  // Create a new ticket
  public static async createTicket(data: CreateTicketInput) {
    try {
      const ticket = await Ticket.create({
        customerName: data.customerName,
        email: data.email,
        status: data.status || 'open',
        notes: data.notes || '',
        createdAt: new Date(),
      });
      return ticket;
    } catch (error) {
      throw new Error('Error creating ticket');
    }
  }
}

export default TicketService;
