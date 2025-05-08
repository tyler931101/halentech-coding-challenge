import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TicketService from '../services/TicketService';

interface Ticket {
  id: number;
  customerName: string;
  email: string;
  createdAt: string;
  status: string;
  notes: string;
}

const TicketDetails: React.FC = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchTicket = async () => {
      if (ticketId) {
        const data = await TicketService.getTicketById(parseInt(ticketId));
        if (data) {
          setTicket(data);
          setStatus(data.status);
          setNotes(data.notes);
        }
      }
    };
    fetchTicket();
  }, [ticketId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (ticket) {
      const updated = await TicketService.updateTicket(ticket.id, status, notes);
      if (updated) {
        alert('Ticket updated successfully!');
        navigate('/');
      }
    }
  };

  if (!ticket) return <p>Loading ticket details...</p>;

  return (
    <div>
      <h2>Ticket Details</h2>
      <form onSubmit={handleSubmit} className='ticket-form'>
        <div>
          <label>Customer Name</label>
          <input type="text" value={ticket.customerName} disabled />
        </div>

        <div>
          <label>Email</label>
          <input type="email" value={ticket.email} disabled />
        </div>

        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="open">Open</option>
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div>
          <label>Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Update Ticket</button>
      </form>
    </div>
  );
};

export default TicketDetails;
