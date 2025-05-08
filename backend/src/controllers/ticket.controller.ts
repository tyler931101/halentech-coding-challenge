import { Request, Response } from 'express';
import TicketService from '../services/ticket.service';
import AppError from '../utils/appError';
import statusCodes from '../utils/statusCodes';

class TicketController {

  // Create a new ticket
  public static async createTicket(req: Request, res: Response): Promise<void> {
    const { customerName, email, status = 'open', notes = '' } = req.body;

    if (!customerName || !email) {
      throw new AppError('Missing required fields: customerName or email', statusCodes.BAD_REQUEST);
    }

    try {
      const newTicket = await TicketService.createTicket({ customerName, email, status, notes });
      res.status(statusCodes.CREATED).json(newTicket); // Send the newly created ticket
    } catch (error) {
      console.error('Error creating ticket:', error);
      throw new AppError('Failed to create ticket', statusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // Get all tickets
  public static async getAllTickets(req: Request, res: Response): Promise<void> {
    try {
      const tickets = await TicketService.getAllTickets();
      res.status(statusCodes.OK).json(tickets); // Correct status code and response
    } catch (error) {
      console.error('Error fetching tickets:', error);
      throw new AppError('Failed to fetch tickets', statusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // Get ticket by ID
  public static async getTicketById(req: Request, res: Response): Promise<void> {
    const ticketId = parseInt(req.params.id);
    if (isNaN(ticketId)) {
      throw new AppError('Invalid ticket ID', statusCodes.BAD_REQUEST);
    }

    try {
      const ticket = await TicketService.getTicketById(ticketId);
      if (!ticket) {
        throw new AppError('Ticket not found', statusCodes.NOT_FOUND);
      }
      res.status(statusCodes.OK).json(ticket); // Send the ticket as JSON
    } catch (error) {
      console.error('Error fetching ticket:', error);
      throw new AppError('Failed to fetch ticket', statusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // Update ticket by ID
  public static async updateTicket(req: Request, res: Response): Promise<void> {
    const ticketId = parseInt(req.params.id);
    if (isNaN(ticketId)) {
      throw new AppError('Invalid ticket ID', statusCodes.BAD_REQUEST);
    }

    const { status, notes } = req.body;
    if (!status || !notes) {
      throw new AppError('Missing required fields: status or notes', statusCodes.BAD_REQUEST);
    }

    try {
      const updatedTicket = await TicketService.updateTicket(ticketId, { status, notes });
      res.status(statusCodes.OK).json(updatedTicket); // Send the updated ticket as JSON
    } catch (error) {
      console.error('Error updating ticket:', error);
      throw new AppError('Failed to update ticket', statusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default TicketController;
