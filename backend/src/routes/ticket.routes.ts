import express from 'express';
import TicketController from '../controllers/ticket.controller';

const router = express.Router();

// Route to create a new ticket
router.post('/tickets', TicketController.createTicket);

// Route to get all tickets
router.get('/tickets', TicketController.getAllTickets);

// Route to get a specific ticket by ID
router.get('/tickets/:id', TicketController.getTicketById);

// Route to update a specific ticket by ID
router.patch('/tickets/:id', TicketController.updateTicket);

export default router;
