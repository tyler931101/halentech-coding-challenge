import React from 'react';
import { Link } from 'react-router-dom';

interface TicketItemProps {
  ticket: {
    id: number;
    customerName: string;
    status: 'open' | 'pending' | 'done';
    email: string;
    createdAt: string;
    notes: string;
  };
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.customerName}</h3>
      <p><strong>Email:</strong> {ticket.email}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
      <p>{ticket.notes}</p>
      <Link to={`/tickets/${ticket.id}`}>
        <button style={{ marginTop: '10px' }}>View / Edit</button>
      </Link>
    </div>
  );
};

export default TicketItem;
