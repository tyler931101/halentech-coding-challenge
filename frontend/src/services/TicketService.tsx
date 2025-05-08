import axios, { AxiosError } from 'axios';

// Define a Ticket interface
interface Ticket {
  id: number;
  customerName: string;
  email: string;
  createdAt: string;
  status: 'open' | 'pending' | 'done';
  notes: string;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class TicketService {
  // Fetch all tickets
  static async getAllTickets(): Promise<Ticket[]> {
    try {
      const response = await axios.get(`${API_URL}/tickets`);
      return response.data;
    } catch (error) {
      // Type the error as AxiosError
      this.handleError(error as AxiosError);
      return []; // Return empty array in case of error
    }
  }

  // Fetch a specific ticket by ID
  static async getTicketById(ticketId: number): Promise<Ticket | null> {
    try {
      const response = await axios.get(`${API_URL}/tickets/${ticketId}`);
      return response.data;
    } catch (error) {
      // Type the error as AxiosError
      this.handleError(error as AxiosError);
      return null; // Return null in case of error
    }
  }

  // Update a ticket
  static async updateTicket(ticketId: number, status: string, notes: string): Promise<Ticket | null> {
    try {
      const response = await axios.patch(`${API_URL}/tickets/${ticketId}`, { status, notes });
      return response.data;
    } catch (error) {
      // Type the error as AxiosError
      this.handleError(error as AxiosError);
      return null; // Return null in case of error
    }
  }

  // Create a new ticket
  static async createTicket(ticketData: {
    customerName: string;
    email: string;
    status?: string;
    notes?: string;
  }): Promise<Ticket | null> {
    try {
      const response = await axios.post(`${API_URL}/tickets`, ticketData);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      return null;
    }
  }

  // Error handler function
  private static handleError(error: AxiosError): void {
    console.error('API Error:', error.message);
    alert('An error occurred while communicating with the server.');
  }
}

export default TicketService;
