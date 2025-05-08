import React, { useState, useEffect } from 'react';
import TicketService from '../services/TicketService';
import TicketItem from './TicketItem';

// Define the Ticket interface
interface Ticket {
  id: number;
  customerName: string;
  status: 'open' | 'pending' | 'done';
  email: string;
  createdAt: string;
  notes: string;
}

const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await TicketService.getAllTickets();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Tickets</h1>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket.id}>
            <TicketItem key={ticket.id} ticket={ticket} />
          </div>
        ))
      )}
    </div>
  );
};

export default TicketList;
