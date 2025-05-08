import React, { useState } from 'react';
import TicketService from '../services/TicketService';
import { useNavigate } from 'react-router-dom';

const CreateTicket: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await TicketService.createTicket({ customerName, email, notes });
      navigate('/'); // redirect to TicketList
    } catch (error) {
      console.error('Failed to create ticket:', error);
    }
  };

  return (
    <div>
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit} className='ticket-form'>
        <div>
          <label htmlFor="customerName">Customer Name</label><br />
          <input
            id="customerName"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label><br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="notes">Notes</label><br />
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </div>
  );
};

export default CreateTicket;
