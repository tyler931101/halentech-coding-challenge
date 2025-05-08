import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateTicket from './components/CreateTicket';
import TicketList from './components/TicketList';
import TicketDetails from './components/TicketDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Ticket Management System</h1>
          <Link to="/create">
            <button className='create-ticket-btn"'>Create Ticket</button>
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<TicketList />} />
            <Route path="/tickets/:ticketId" element={<TicketDetails />} />
            <Route path="/create" element={<CreateTicket />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
